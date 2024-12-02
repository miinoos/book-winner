import { useEffect } from "react";
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";

import { useBookContext } from "../hooks/useBooksContext";

const Home = () => {
  const { books, dispatch } = useBookContext();

  useEffect(() => {
    const fetchBookReviews = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BOOK_REVIEWS", payload: json });
      }
    };

    fetchBookReviews();
  }, [dispatch]);

  return (
    <div className="flex w-full gap-0">
      <div className="grid grid-cols-2 gap-4 m-10 w-2/3">
        {books &&
          books.map((book) => <BookDetails key={book._id} book={book} />)}
      </div>
      <div className="w-max m-0">
        <BookForm />
      </div>
    </div>
  );
};

export default Home;

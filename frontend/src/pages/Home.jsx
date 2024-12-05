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
    <div className="grid grid-cols-3 gap-2">
      {/* Turning the page into a grid of 3 colums, 1 for each review and another for form - need to turn the page into 2 halves instead of 2 */}
      <div className="col-span-2">
        <h2 className="text-3xl font-bold text-center pb-5">
          Our Community <span className="text-highlight-yellow">Reviews..</span>
        </h2>
        <div className="grid grid-cols-2 gap-2 p-10">
          {/* Made a flex box to equally distribute the grids */}
          {books &&
            books.map((book) => <BookDetails key={book._id} book={book} />)}
        </div>
      </div>
      <div className="">
        <BookForm />
      </div>
    </div>
  );
};

export default Home;

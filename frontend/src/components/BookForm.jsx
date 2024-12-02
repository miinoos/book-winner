import { useState } from "react";
import { useBookContext } from "../hooks/useBooksContext";

const BookForm = () => {
  const [coverURL, setCoverURL] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState();
  const [review, setReview] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = { cover, title, rating, review };

    const response = await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setRating();
      setReview("");
      setCoverURL("");
      console.log("new review added", json);
      dispatchEvent({ type: "CREATE_BOOK_REVIEW", payload: json });
    }
  };

  return (
    <form className="m-10 w-full" onSubmit={handleSubmit}>
      <h3>Add a new Book Review</h3>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Book Title :{" "}
      </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Rate The Book(Out Of 5) :{" "}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="number"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      />

      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Write Your Review :{" "}
      </label>
      <textarea
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        onChange={(e) => setReview(e.target.value)}
        value={review}
      />

      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        URL Of Cover Image(Optional) :{" "}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        onChange={(e) => setCoverURL(e.target.value)}
        value={coverURL}
      />
      <button>Add Book Review</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default BookForm;

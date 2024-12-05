import { useState } from "react";
import { useBookContext } from "../hooks/useBooksContext";

const BookForm = () => {
  const { dispatch } = useBookContext();
  const [coverURL, setCoverURL] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = { cover: coverURL, title, rating, review };
    console.log(JSON.stringify(book));

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
      setEmptyFields(json.emptyFields);
      // fetch the empty fields
    }
    if (response.ok) {
      setEmptyFields([]);
      setTitle("");
      setRating("");
      setReview("");
      setCoverURL("");
      setError("");
      console.log("new review added", json);
      dispatch({ type: "CREATE_BOOK_REVIEW", payload: json });
    }
  };

  return (
    <form className="m-10 max-w-sm" onSubmit={handleSubmit}>
      <h3 className="text-3xl font-bold">
        Add a new Book <span className="text-highlight-yellow">Review</span>!
      </h3>
      <label className="block text-xl pt-6 pb-3 font-medium">
        Book Title :
      </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={`bg-light-black border  outline-none text-highlight-yellow text-sm rounded-lg block w-full p-2.5 ${
          emptyFields.includes("title")
            ? "border-red-500"
            : "border-highlight-yellow"
        }`}
        placeholder="Give your review a title!"
      />

      <div className="flex justify-between items-center pt-6 pb-3">
        <label className="block text-xl font-medium">
          Rate The Book(Out Of 5) :
        </label>
        <input
          className={`bg-light-black border  outline-none text-highlight-yellow text-sm rounded-lg block w-20 p-2.5 ${
            emptyFields.includes("rating")
              ? "border-red-500"
              : "border-highlight-yellow"
          }`}
          type="number"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          min="0"
          max="5"
        />
        <p className="block text-xl font-medium pr-4 ml-0">/ 5</p>
      </div>

      <label className="block text-xl pt-1 pb-3 font-medium">
        Write Your Review :
      </label>
      <textarea
        className={`bg-light-black border  outline-none text-highlight-yellow text-sm rounded-lg block w-full p-2.5 min-h-[150px] ${
          emptyFields.includes("review")
            ? "border-red-500"
            : "border-highlight-yellow"
        }`}
        type="text"
        onChange={(e) => setReview(e.target.value)}
        value={review}
        placeholder="Your review for the book..."
      />

      <label className="block text-xl pt-6 pb-3 font-medium">
        URL Of Cover Image(Optional) :
      </label>
      <input
        className={`bg-light-black border  outline-none text-highlight-yellow text-sm rounded-lg block w-full p-2.5 ${
          emptyFields.includes("cover")
            ? "border-red-500"
            : "border-highlight-yellow"
        }`}
        type="url"
        onChange={(e) => setCoverURL(e.target.value)}
        value={coverURL}
        placeholder="Cover Image URL : ex... https://www.image.."
      />
      <button className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-5 p-3">
        Add Book Review
      </button>
      {error && (
        <div className="py-3 my-5 border border-red-500 text-center rounded-lg">
          {error}
        </div>
      )}
    </form>
  );
};

export default BookForm;

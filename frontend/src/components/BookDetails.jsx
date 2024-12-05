const BookDetails = ({ book }) => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center bg-light-black rounded-lg shadow md:flex-row max-w-md">
          {book.cover && (
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={book.cover}
              alt="Book Cover Image"
            />
          )}
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {book.title}
            </h2>
            <p className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Rating : {book.rating}/5
            </p>
            <p className="mb-3 font-normal text-white">{book.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

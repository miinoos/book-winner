import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div>
        <Link path="/">
          <h1 className="text-4xl font-bold p-10">
            Book <span className="text-highlight-yellow">Reviews</span>
            {/* Website headline - Links to the home page when clicked. */}
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;

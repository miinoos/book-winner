import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div className="container flex flex-wrap items-center justify-between">
        <Link path="/">
          <h1 className="text-3xl font-bold p-5 mx-auto pl-10">Book Reviews</h1>
        </Link>

        {/* <ul className="font-medium flex flex-row">
        <li className="p-4 pr-6">Login</li>
        <li className="p-4 pr-6">Signup</li>
        <li className="p-4 pr-6">Search</li>
        <li className="p-4 pr-6">Github</li>
      </ul> */}
      </div>
    </header>
  );
};

export default Navigation;

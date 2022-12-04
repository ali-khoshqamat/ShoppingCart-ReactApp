import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col w-[40rem] gap-y-5">
      <p>
        <span className="font-bold text-red-600">404</span>
        <br />
        the page not found
      </p>
      <Link to="/" className="text-red-600">
        go to Home Page!
      </Link>
    </div>
  );
};

export default NotFound;

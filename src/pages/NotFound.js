import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center text-center">
      <div className="flex w-[40rem] flex-col gap-y-5">
        <p>
          <span className="font-bold text-red-600">404</span>
          <br />
          the page not found
        </p>
        <Link to="/" className="text-red-600">
          go to Home Page!
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

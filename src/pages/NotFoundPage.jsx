import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-7xl">404</h1>
      <Link to="/">
        <button className="p-2 bg-bgDark text-light">Go To Homepage</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

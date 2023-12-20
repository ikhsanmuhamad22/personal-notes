import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between border-b-4 border-black py-2">
      <h1 className="text-3xl underline">
        <Link to="/">Personal Notes</Link>
      </h1>
      <h1 className="underline">
        <Link to="archives">Archives</Link>
      </h1>
    </div>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import LogoutButton from './Button/LogoutButton';
import TranslateButton from './Button/TranslateButton';

const Header = ({ user }) => {
  return (
    <div className="flex justify-between border-b-4 border-black py-2">
      <h1 className="text-3xl underline">
        <Link to="/">Personal Notes</Link>
      </h1>
      <div className="flex gap-4">
        <TranslateButton />
        <LogoutButton user={user} />
      </div>
    </div>
  );
};

export default Header;

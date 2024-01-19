import { Link } from 'react-router-dom';
import LogoutButton from './Button/LogoutButton';
import TranslateButton from './Button/TranslateButton';
import { useContext } from 'react';
import { AuthUser } from '../context/AuthUser';

const Header = () => {
  const { authUser, setAuthUser } = useContext(AuthUser);

  const onLogout = async () => {
    localStorage.removeItem('accessToken');
    setAuthUser(null);
  };

  return (
    <div className="flex justify-between border-b-4 border-black py-2">
      <h1 className="text-3xl">
        <Link to="/">Personal Notes</Link>
      </h1>
      <div className="flex gap-4">
        <TranslateButton />
        {authUser ? (
          <button onClick={onLogout}>
            <LogoutButton />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Header;

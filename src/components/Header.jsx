import { Link, useNavigate } from 'react-router-dom';
import LogoutButton from './Button/LogoutButton';
import TranslateButton from './Button/TranslateButton';
import { useContext } from 'react';
import { AuthUser } from '../context/AuthUserContext';
import { Language } from '../context/LanguageContext';
import translations from '../utils/translate';
import MoonButton from './Button/MoonButton';
import SunButton from './Button/SunButton';
import { DarkMode } from '../context/DarkModeContext';

const Header = () => {
  const { authUser, setAuthUser } = useContext(AuthUser);
  const { language, changeLanguage } = useContext(Language);
  const navigate = useNavigate();
  const { isMode, setIsMode } = useContext(DarkMode);

  const onToggleDarkMode = () => {
    setIsMode();
    if (isMode === 'light') {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
  };

  const onLogout = async () => {
    localStorage.removeItem('accessToken');
    setAuthUser(null);
    navigate('/');
  };

  const onToggleLanguage = () => {
    changeLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <div
      className={`flex justify-between border-b-4 ${
        isMode === 'light' ? 'border-bgDark' : 'border-light'
      } py-2`}
    >
      <h1 className="md:text-3xl">
        <Link to="/">{translations[language].personal_notes}</Link>
      </h1>
      <div className="flex gap-4 cursor-pointer">
        <div onClick={onToggleDarkMode}>
          {isMode === 'dark' ? <SunButton /> : <MoonButton />}
        </div>
        <div onClick={onToggleLanguage}>
          <TranslateButton />
        </div>
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

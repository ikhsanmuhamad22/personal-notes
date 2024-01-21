import { Link, useNavigate } from 'react-router-dom';
import LogoutButton from './Button/LogoutButton';
import TranslateButton from './Button/TranslateButton';
import { useContext, useState } from 'react';
import { AuthUser } from '../context/AuthUserContext';
import { Language } from '../context/LanguageContext';
import translations from '../utils/translate';
import MoonButton from './Button/MoonButton';
import SunButton from './Button/SunButton';

const Header = () => {
  const { authUser, setAuthUser } = useContext(AuthUser);
  const { language, changeLanguage } = useContext(Language);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
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
    <div className="flex justify-between border-b-4 border-bgDark dark:border-light py-2">
      <h1 className="md:text-3xl">
        <Link to="/">{translations[language].personal_notes}</Link>
      </h1>
      <div className="flex gap-4 cursor-pointer">
        <div onClick={onToggleDarkMode}>
          {!isDarkMode ? <SunButton /> : <MoonButton />}
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

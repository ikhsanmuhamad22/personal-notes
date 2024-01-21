import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailNotePage from './pages/DetailNotePage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useContext, useEffect, useState } from 'react';
import { getUserLogged, putAccessToken } from './utils/api';
import { AuthUser } from './context/AuthUserContext';
import Loader from './components/Loader';
import { DarkMode } from './context/DarkModeContext';

const App = () => {
  const { authUser, setAuthUser } = useContext(AuthUser);
  const [initializing, setinitializing] = useState(true);
  const { isMode, setIsMode } = useContext(DarkMode);

  useEffect(() => {
    const setMode = () => {
      const mode = localStorage.getItem('mode');
      setIsMode(mode);
    };

    const setModeForBg = () => {
      const body = document.body;

      body.classList.remove(
        'bg-bgDark',
        'text-light',
        'bg-light',
        'text-bgDark'
      );

      if (isMode === 'light') {
        body.classList.add('bg-light', 'text-bgDark');
      } else {
        body.classList.add('bg-bgDark', 'text-light');
      }
    };

    const fetchUserData = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setinitializing(false);
      }
    };
    setMode();
    setModeForBg();
    fetchUserData();
  }, [setAuthUser, setIsMode, isMode]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthUser(data);
  };

  if (initializing) {
    return <Loader />;
  }

  return (
    <main>
      {authUser === null ? (
        <Routes>
          <Route
            path="/*"
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailNotePage />} />
          <Route path="/notes/new" element={<AddNotePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      )}
    </main>
  );
};

export default App;

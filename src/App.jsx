import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailNotePage from './pages/DetailNotePage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useEffect, useState } from 'react';
import { getUserLogged, putAccessToken } from './utils/api';

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [initializing, setinitializing] = useState(true);

  useEffect(() => {
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
    fetchUserData();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthUser(data);
  };

  if (initializing) {
    return <p>Loading..</p>;
  }

  return (
    <main>
      <Routes>
        {authUser === null ? (
          <Route
            path="/*"
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
        ) : (
          <Route path="/" element={<HomePage user={authUser} />} />
        )}
        <Route path="/archives" element={<ArchivePage user={authUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/notes/:id" element={<DetailNotePage />} />
        <Route path="/notes/new" element={<AddNotePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default App;

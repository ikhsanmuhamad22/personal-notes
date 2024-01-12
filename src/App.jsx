import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailNotePage from './pages/DetailNotePage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/archives" element={<ArchivePage />} />
        <Route path="/note/:id" element={<DetailNotePage />} />
        <Route path="/note/new" element={<AddNotePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default App;

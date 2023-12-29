import { Route, Routes } from 'react-router-dom';
import Header from './header';
import HomePage from '../pages/HomePage';
import ArchivePage from '../pages/ArchivePage';
import DetailNote from '../pages/DetailNotes';

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/note/:id" element={<DetailNote />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

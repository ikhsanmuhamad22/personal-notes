import { Route, Routes } from 'react-router-dom';
import Header from './header';
import HomePage from '../pages/HomePage';
import ArchivePage from '../pages/ArchivePage';

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
        </Routes>
      </main>
    </div>
  );
};

export default App;

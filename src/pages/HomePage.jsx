import { useContext, useEffect, useState } from 'react';
import Search from '../components/Search';
import Card from '../components/card/Card';
import Header from '../components/Header';
import { getActiveNotes } from '../utils/api';
import ArchiveButton from '../components/Button/ArchiveButton';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { Language } from '../context/LanguageContext';
import translations from '../utils/translate';

const HomePage = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useContext(Language);

  const title = translations[language].search_note;

  useEffect(() => {
    let isMounted = true;
    const getHandleNotes = async () => {
      try {
        const { data } = await getActiveNotes();
        if (isMounted) {
          setNotes(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    getHandleNotes();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleParentSearchChange = (value) => {
    setValueSearch(value);
  };

  const searchNotes = () => {
    const result = notes.filter((note) =>
      note.title.toLowerCase().includes(valueSearch.toLowerCase())
    );
    return result;
  };

  return (
    <>
      <header>
        <Header />
      </header>
      {loading ? (
        <Loader />
      ) : (
        <main className="p-4">
          <Search title={title} onSearchChange={handleParentSearchChange} />
          <Card notes={searchNotes()} archive={false} search={valueSearch} />
          <Link to="/archives" className="fixed bottom-10 right-10">
            <ArchiveButton />
          </Link>
        </main>
      )}
    </>
  );
};

export default HomePage;

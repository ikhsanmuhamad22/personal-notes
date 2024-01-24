import { useContext, useEffect, useState } from 'react';
import Search from '../components/Search';
import Card from '../components/card/Card';
import Header from '../components/Header';
import { getArchivedNotes } from '../utils/api';
import HomeButton from '../components/Button/HomeButton';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { Language } from '../context/LanguageContext';
import translations from '../utils/translate';

const ArchivePage = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useContext(Language);

  const title = translations[language].search_archive;

  useEffect(() => {
    let isMounted = true;

    const getHandleNotes = async () => {
      try {
        const { data } = await getArchivedNotes();
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
          <Card notes={searchNotes()} archive={true} search={valueSearch} />
          <Link to="/" className="fixed bottom-10 right-10">
            <HomeButton />
          </Link>
        </main>
      )}
    </>
  );
};

export default ArchivePage;

import { useEffect, useState } from 'react';
import Search from '../components/Search';
import Card from '../components/card/Card';
import Header from '../components/Header';
import { getActiveNotes } from '../utils/api';

const HomePage = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [notes, setNotes] = useState([]);

  const title = 'Search notes';

  useEffect(() => {
    let isMounted = true;

    const getHandleNotes = async () => {
      try {
        const { data } = await getActiveNotes();
        if (isMounted) {
          setNotes(data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
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
      <main className="p-4">
        <Search title={title} onSearchChange={handleParentSearchChange} />
        <Card notes={searchNotes()} archive={false} search={valueSearch} />
      </main>
    </>
  );
};

export default HomePage;

import { useState } from 'react';
import Search from '../components/Search';
import Card from '../components/card/Card';
import { getActiveNotes } from '../utils/data';
import Header from '../components/Header';

const HomePage = () => {
  const [valueSearch, setValueSearch] = useState('');

  const title = 'Search notes';
  const getNotes = getActiveNotes();

  const handleParentSearchChange = (value) => {
    setValueSearch(value);
  };

  const searchNotes = () => {
    const result = getNotes.filter((note) =>
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

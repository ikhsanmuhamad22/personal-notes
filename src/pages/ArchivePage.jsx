import { useState } from 'react';
import Search from '../components/Search';
import Card from '../components/card/Card';
import { getArchivedNotes } from '../utils/data';

const ArchivePage = () => {
  const [valueSearch, setValueSearch] = useState('');

  const title = 'Search Archive notes';
  const getNotes = getArchivedNotes();

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
    <main className="p-4">
      <Search title={title} onSearchChange={handleParentSearchChange} />
      <Card notes={searchNotes()} archive={true} search={valueSearch} />
    </main>
  );
};

export default ArchivePage;

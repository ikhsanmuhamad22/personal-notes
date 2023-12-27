import Search from '../components/Search';
import Card from '../components/card/Card';
import { getArchivedNotes } from '../utils/data';

const ArchivePage = () => {
  const title = 'Search Archive notes';
  const getNotes = getArchivedNotes();
  return (
    <main className="p-4">
      <Search title={title} />
      <Card notes={getNotes} archive={true} />
    </main>
  );
};

export default ArchivePage;

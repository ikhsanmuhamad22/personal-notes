import Search from '../components/Search';
import Card from '../components/card/Card';
import { getActiveNotes } from '../utils/data';

const HomePage = () => {
  const title = 'Search notes';
  const getNotes = getActiveNotes();
  return (
    <main className="p-4">
      <Search title={title} />
      <Card notes={getNotes} archive={false} />
    </main>
  );
};

export default HomePage;

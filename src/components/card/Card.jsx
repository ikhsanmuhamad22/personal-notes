import { getAllNotes } from '../../utils/data';
import CardItem from './CardItem';

const Card = () => {
  const notes = getAllNotes();
  return (
    <section className="grid grid-cols-4 gap-4 p-2">
      {notes.map((note) => (
        <CardItem
          key={note.id}
          title={note.title}
          date={note.createdAt}
          body={note.body}
        />
      ))}
    </section>
  );
};

export default Card;

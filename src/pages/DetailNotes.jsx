import { useParams } from 'react-router-dom';
import { getNote } from '../utils/data';

const DetailNote = () => {
  const { id } = useParams();
  const note = getNote(id);

  return (
    <section>
      <h1>{note.title}</h1>
      <p>{note.createdAt}</p>
      <p>{note.body}</p>
    </section>
  );
};

export default DetailNote;

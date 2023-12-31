import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote } from '../utils/data';
import ArchiveButton from '../components/Button/ArchiveButton';
import DeleteButton from '../components/Button/DeleteButton';

const DetailNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const note = getNote(id);

  const onArchive = () => {
    archiveNote(id);
    navigate('/');
  };

  const onDelete = () => {
    deleteNote(id);
    navigate('/');
  };

  return (
    <section className="static">
      <main className="m-10">
        <div className="py-7">
          <h1 className="text-4xl ">{note.title}</h1>
          <p>{note.createdAt}</p>
        </div>
        <p>{note.body}</p>
      </main>
      <div className="flex gap-4 absolute bottom-10 right-10">
        <div onClick={onArchive}>
          <ArchiveButton />
        </div>
        <div onClick={onDelete}>
          <DeleteButton />
        </div>
      </div>
    </section>
  );
};

export default DetailNote;

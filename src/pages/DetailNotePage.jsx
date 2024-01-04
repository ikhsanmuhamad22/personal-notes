import { useNavigate, useParams } from 'react-router-dom';
import {
  archiveNote,
  deleteNote,
  getNote,
  showFormattedDate,
  unarchiveNote,
} from '../utils/data';
import ArchiveButton from '../components/Button/ArchiveButton';
import DeleteButton from '../components/Button/DeleteButton';
import BackButtonLink from '../components/BackButtonLink';

const DetailNotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const note = getNote(id);

  const onArchive = () => {
    archiveNote(id);
    navigate('/');
  };

  const onUnarchive = () => {
    unarchiveNote(id);
    navigate('/');
  };

  const onDelete = () => {
    deleteNote(id);
    navigate('/');
  };

  return (
    <section className="static">
      <BackButtonLink />
      <main className="m-3 lg:m-10">
        <div className="py-4 lg:py-7">
          <h1 className="text-3xl lg:text-4xl ">{note.title}</h1>
          <p>{showFormattedDate(note.createdAt)}</p>
        </div>
        <p>{note.body}</p>
      </main>
      <div className="flex gap-4 absolute bottom-10 right-10">
        <div onClick={note.archived ? onUnarchive : onArchive}>
          <ArchiveButton />
        </div>
        <div onClick={onDelete}>
          <DeleteButton />
        </div>
      </div>
    </section>
  );
};

export default DetailNotePage;

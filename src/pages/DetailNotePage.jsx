import { useNavigate, useParams } from 'react-router-dom';
import ArchiveButton from '../components/Button/ArchiveButton';
import DeleteButton from '../components/Button/DeleteButton';
import BackButtonLink from '../components/BackButtonLink';
import {
  archiveNote,
  deleteNote,
  getNote,
  showFormattedDate,
  unarchiveNote,
} from '../utils/api';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const DetailNotePage = () => {
  const [note, setNote] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const getHandleNotes = async (id) => {
      try {
        const { data } = await getNote(id);
        if (isMounted) {
          setNote(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    getHandleNotes(id);
    return () => {
      isMounted = false;
    };
  }, [id]);

  const onArchive = async () => {
    await archiveNote(id);
    navigate('/');
  };

  const onUnarchive = async () => {
    await unarchiveNote(id);
    navigate('/');
  };

  const onDelete = async () => {
    await deleteNote(id);
    navigate('/');
  };

  return (
    <section className="static">
      <BackButtonLink />
      {loading ? (
        <Loader />
      ) : (
        <main className="m-3 lg:m-10">
          <div className="py-4 lg:py-7">
            <h1 className="text-3xl lg:text-4xl ">{note.title}</h1>
            <p>{showFormattedDate(note.createdAt)}</p>
          </div>
          <p>{note.body}</p>
        </main>
      )}

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

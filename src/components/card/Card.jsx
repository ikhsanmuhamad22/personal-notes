import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import PropTypes from 'prop-types';

const Card = ({ notes, archive, search }) => {
  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 p-2">
      {archive || search ? null : (
        <Link to="/notes/new" className="w-full">
          <article className="border border-black p-3 shadow-md hover:scale-105 transition-all cursor-pointer flex items-center justify-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="82"
              height="82"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </article>
        </Link>
      )}
      {notes.length ? (
        notes.map((note) => (
          <CardItem
            key={note.id}
            id={note.id}
            title={note.title}
            date={note.createdAt}
            body={note.body}
          />
        ))
      ) : (
        <h1>Empty</h1>
      )}
    </section>
  );
};

Card.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
  archive: PropTypes.bool,
  search: PropTypes.string,
};

export default Card;

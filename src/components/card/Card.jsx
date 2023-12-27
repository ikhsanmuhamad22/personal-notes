import CardItem from './CardItem';

const Card = ({ notes, archive }) => {
  console.log(notes);
  return (
    <section className="grid grid-cols-4 gap-4 p-2">
      {archive ? null : (
        <article className="border border-black p-3 rounded-md shadow-md hover:scale-105 transition-all cursor-pointer flex items-center justify-center">
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
      )}
      {notes.length ? (
        notes.map((note) => (
          <CardItem
            key={note.id}
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

export default Card;

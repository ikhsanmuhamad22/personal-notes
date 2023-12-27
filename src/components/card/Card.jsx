import CardItem from './CardItem';

const Card = ({ notes, archive }) => {
  console.log(notes);
  return (
    <section className="grid grid-cols-4 gap-4 p-2">
      {archive ? null : (
        <article className="border border-black p-3 rounded-md shadow-md hover:scale-105 transition-all cursor-pointer">
          <p>ini</p>
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

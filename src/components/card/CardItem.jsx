import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardItem = ({ id, title, date, body }) => {
  return (
    <Link to={`/note/${id}`} className="min-h-full">
      <article className="border border-black p-3 rounded-md shadow-md hover:scale-105 transition-all cursor-pointer h-full">
        <h2 className="font-bold underline pt-2">{title}</h2>
        <p className="">{date}</p>
        <p className="py-2">{body}</p>
      </article>
    </Link>
  );
};

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CardItem;

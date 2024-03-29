import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../../utils/api';
import { useContext } from 'react';
import { DarkMode } from '../../context/DarkModeContext';

const CardItem = ({ id, title, date, body }) => {
  const { isMode } = useContext(DarkMode);

  return (
    <Link to={`/notes/${id}`} className="card min-h-full">
      <article
        className={`border ${
          isMode === 'light' ? 'border-bgDark' : 'border-light'
        } p-3 shadow-md hover:scale-105 transition-all cursor-pointer h-full`}
      >
        <h2 className="font-bold underline pt-2">{title}</h2>
        <p className="pb-1 italic">{showFormattedDate(date)}</p>
        <p className="py-1 line-clamp-4">{body}</p>
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

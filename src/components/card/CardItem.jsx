import PropTypes from 'prop-types';

const CardItem = ({ title, date, body }) => {
  return (
    <article className="border border-black p-3 rounded-md shadow-md hover:scale-105 transition-all cursor-pointer">
      <h2 className="font-bold underline pt-2">{title}</h2>
      <p className="">{date}</p>
      <p className="py-2">{body}</p>
    </article>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CardItem;

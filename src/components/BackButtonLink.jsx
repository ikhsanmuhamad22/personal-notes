import { Link } from 'react-router-dom';
import BackButton from './Button/BackButton';

const BackButtonLink = () => {
  return (
    <Link className="absolute md:left-10 md:top-10 bottom-10 left-10" to={-1}>
      <BackButton />
    </Link>
  );
};

export default BackButtonLink;

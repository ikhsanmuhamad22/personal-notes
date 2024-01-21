import { useContext } from 'react';
import { DarkMode } from '../context/DarkModeContext';

const Loader = () => {
  const { isMode } = useContext(DarkMode);

  return (
    <div className="loader-container">
      <div className="loader">
        <div className={isMode === 'light' ? 'bg-bgDark' : '!bg-light'}></div>
        <div className={isMode === 'light' ? 'bg-bgDark' : '!bg-light'}></div>
        <div className={isMode === 'light' ? 'bg-bgDark' : '!bg-light'}></div>
      </div>
    </div>
  );
};

export default Loader;

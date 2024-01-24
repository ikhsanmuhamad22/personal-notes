import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isMode, setIsMode] = useState('light');

  const toggleMode = () => {
    setIsMode(isMode === 'light' ? 'dark' : 'light');
  };

  return (
    <DarkModeContext.Provider value={{ isMode, setIsMode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DarkMode = DarkModeContext;
export default DarkModeProvider;

import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthUserContext = createContext();
const AuthUserContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};

AuthUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthUser = AuthUserContext;
export default AuthUserContextProvider;

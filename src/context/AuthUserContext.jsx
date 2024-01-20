import { createContext, useState } from 'react';

const AuthUserContext = createContext();
const AuthUserContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export const AuthUser = AuthUserContext;
export default AuthUserContextProvider;

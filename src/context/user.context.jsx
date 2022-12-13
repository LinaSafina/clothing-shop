import { createContext, useState } from 'react';

const defaultCurrentUserValue = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const UserContext = createContext(defaultCurrentUserValue);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

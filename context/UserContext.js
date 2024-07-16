import { createContext, useContext, useState, useEffect } from 'react';
import { baseUrl, postApi } from "../utils/fetchApi";

const UserContext = createContext('user');

export const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  const logout = async () => {
    try {
      await postApi(`${baseUrl}/logout`);

    } catch (error) {
      console.error('Logout failed:', error);
    }
    finally {
      setIsAdmin(false);
      localStorage.removeItem('isAdmin');
    }
  };

  return (
    <UserContext.Provider value={{ isAdmin, setIsAdmin, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

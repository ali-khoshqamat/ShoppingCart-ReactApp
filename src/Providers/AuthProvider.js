import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);

const LOCAL_STORAGE_AUTH_KEY = "authState";

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
    setState(userData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispatcher.Provider value={setState}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (this could be checking a token in localStorage, a cookie, etc.)
    const userLoggedIn = !!localStorage.getItem('userToken'); // Example check
    setIsLoggedIn(userLoggedIn);
  }, []);

  const login = () => {
    // Perform login actions, e.g., setting tokens
    localStorage.setItem('userToken', 'your-token-here');
    setIsLoggedIn(true);
    router.push('/farmers-dashboard'); // Redirect after login
  };

  const logout = () => {
    // Perform logout actions, e.g., removing tokens
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    router.push('/user_signin'); // Redirect after logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const adminList = ['Irisval', 'RetaxMaster', 'freddier'];

const AuthContext = React.createContext();

function AuthProvider({children}) {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({username}) => {
    const isAdmin = adminList.find(admin => admin === username)
    setUser({username, isAdmin});
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = {user, login, logout};

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();
  const navigate2 = useNavigate();

  if (!auth.user) {
    return navigate2('/profile');
    // return <Navigate to="/login" />;
  }

  return props.children;
}

export {
  AuthProvider,
  useAuth,
  AuthRoute,
};
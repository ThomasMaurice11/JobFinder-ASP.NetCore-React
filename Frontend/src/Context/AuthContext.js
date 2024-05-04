// import React, { createContext, useState } from 'react';
// import { jwtDecode } from 'jwt-decode';

// // Create the AuthContext
// export const AuthContext = createContext();

// // Create the AuthProvider component
// export const AuthProvider = ({ children }) => {
//   // Get the token from local storage or set a default value
//   const initialToken = localStorage.getItem('token') || '';

//   // Set up state to store the token and role
//   const [token, setToken] = useState(initialToken);
//   const [role, setRole] = useState('');

//   // Function to update the token and role
//   const updateToken = (newToken) => {
//     setToken(newToken);
//     localStorage.setItem('token', newToken); // Update token in local storage
//     const decodedToken = jwtDecode(newToken);
//     if (decodedToken) {
//       const decodedRole = decodedToken.role;
//       setRole(decodedRole);
//     }
//     // Function to update the token
//   const updateTokenForLogout = (newToken) => {
//     // Update the token state
//     setToken(newToken);
//     // Update the token in localStorage
//     localStorage.setItem('token', newToken);
//   };
//   };


 
  

//   return (
//     <AuthContext.Provider value={{ token, role, updateToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };





import React, { createContext, useContext, useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
      setRole(decodedToken.role);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);




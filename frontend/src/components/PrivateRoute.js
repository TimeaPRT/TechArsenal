import React from 'react';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return (
      <div style={styles.container}>
        <h2>Access Denied</h2>
        <p>Please log in to access this page.</p>
        <a href="/login">Go to Login</a>
      </div>
    );
  }

  return children;
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
};

export default PrivateRoute;
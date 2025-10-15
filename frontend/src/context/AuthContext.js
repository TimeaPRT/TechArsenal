import React, { createContext, useState, useContext } from 'react';
import { register as apiRegister, login as apiLogin, verifyCode as apiVerifyCode } from '../api/authApi';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [pendingUserId, setPendingUserId] = useState(null);

  // Register function
  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await apiRegister(userData);
      setPendingUserId(response.userId);
      setNeedsVerification(true);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (userData) => {
    setLoading(true);
    try {
      const response = await apiLogin(userData);
      setPendingUserId(response.userId);
      setNeedsVerification(true);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Verify code function
  const verify = async (code) => {
    setLoading(true);
    try {
      const response = await apiVerifyCode({
        userId: pendingUserId,
        code: code
      });
      
      setUser(response.user);
      setToken(response.token);
      setNeedsVerification(false);
      setPendingUserId(null);
      localStorage.setItem('token', response.token);
      
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    setNeedsVerification(false);
    setPendingUserId(null);
    localStorage.removeItem('token');
  };

  const value = {
    user,
    token,
    loading,
    needsVerification,
    pendingUserId,
    register,
    login,
    verify,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
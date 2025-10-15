import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VerifyPage from './pages/VerifyPage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

// Cosmic Background Component
function CosmicBackground() {
  return (
    <>
      <div className="cosmic-bg"></div>
      <div className="neon-grid"></div>
    </>
  );
}

// 404 Not Found Component
function NotFound() {
  return (
    <div style={styles.notFound}>
      <div className="glass-container" style={styles.notFoundCard}>
        <h1 className="minimal-title" style={styles.notFoundTitle}>404</h1>
        <p style={styles.notFoundText}>Page not found</p>
        <a href="/" className="super-btn" style={styles.notFoundButton}>
          RETURN HOME
        </a>
      </div>
    </div>
  );
}

// Main App Content with Routing
function AppContent() {
  const { token, needsVerification } = useAuth();

  return (
    <div className="App">
      <CosmicBackground />
      <Routes>
        <Route 
          path="/login" 
          element={
            !token ? (
              needsVerification ? <Navigate to="/verify" /> : <LoginPage />
            ) : (
              <Navigate to="/dashboard" />
            )
          } 
        />
        <Route 
          path="/register" 
          element={
            !token ? (
              needsVerification ? <Navigate to="/verify" /> : <RegisterPage />
            ) : (
              <Navigate to="/dashboard" />
            )
          } 
        />
        <Route 
          path="/verify" 
          element={
            needsVerification ? <VerifyPage /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/" 
          element={<Navigate to={token ? "/dashboard" : "/login"} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

const styles = {
  notFound: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  notFoundCard: {
    textAlign: 'center',
  },
  notFoundTitle: {
    fontSize: '120px',
    marginBottom: '20px',
  },
  notFoundText: {
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '40px',
  },
  notFoundButton: {
    width: 'auto',
    padding: '20px 40px',
    display: 'inline-block',
  },
};

export default App;
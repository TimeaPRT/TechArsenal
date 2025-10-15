import React from 'react';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const { register, loading } = useAuth();

  const handleRegister = async (formData) => {
    try {
      await register(formData);
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        {/* Minimal Header */}
        <div style={styles.header}>
          <h1 className="minimal-title">CREATE ACCOUNT</h1>
          <p className="minimal-subtitle">Join our secure platform</p>
        </div>

        {/* Glass Container with Animated Form */}
        <div className="glass-container" style={styles.glassContainer}>
          <AuthForm 
            mode="register" 
            onSubmit={handleRegister}
            loading={loading}
          />
        </div>

        {/* Simple Footer */}
        <p style={styles.footer}>
          Already have an account?{' '}
          <a href="/login" style={styles.link}>Sign in</a>
        </p>

      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    animation: 'fadeIn 0.8s ease',
  },
  content: {
    width: '100%',
    maxWidth: '500px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    animation: 'slideInDown 0.8s ease',
  },
  glassContainer: {
    animation: 'containerAppear 1s ease',
  },
  footer: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '2rem',
    fontSize: '15px',
    animation: 'fadeIn 1.2s ease',
  },
  link: {
    color: '#00ffff',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.3s ease',
  },
};

export default RegisterPage;
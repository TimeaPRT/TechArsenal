import React from 'react';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { login, loading } = useAuth();

  const handleLogin = async (formData) => {
    try {
      await login(formData);
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        {/* Minimal Header */}
        <div style={styles.header}>
          <h1 className="minimal-title">AUTHENTICATION</h1>
          <p className="minimal-subtitle">Secure access to your account</p>
        </div>

        {/* Glass Container with Animated Form */}
        <div className="glass-container" style={styles.glassContainer}>
          <AuthForm 
            mode="login" 
            onSubmit={handleLogin}
            loading={loading}
          />
        </div>

        {/* Simple Footer */}
        <p style={styles.footer}>
          Need an account?{' '}
          <a href="/register" style={styles.link}>Sign up</a>
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

// Adaugă și aceste animații în App.css
const additionalStyles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

// Adaugă stilurile în document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = additionalStyles;
  document.head.appendChild(styleSheet);
}

export default LoginPage;
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const VerifyPage = () => {
  const [code, setCode] = useState('');
  const { verify, loading } = useAuth();
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await verify(code);
      alert('Verification successful!');
      navigate('/dashboard');
    } catch (error) {
      alert('Verification failed: ' + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        {/* Minimal Header */}
        <div style={styles.header}>
          <h1 className="minimal-title">VERIFICATION</h1>
          <p className="minimal-subtitle">Enter your verification code</p>
        </div>

        {/* Glass Container with Form */}
        <div className="glass-container">
          <form onSubmit={handleVerify} style={styles.form}>
            <div className="form-group">
              <label className="form-label">Verification Code</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter 6-digit code"
                maxLength="6"
                className="ultra-input"
                style={styles.codeInput}
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading || code.length !== 6}
              className="super-btn"
            >
              {loading ? (
                <span className="btn-loading">
                  <div className="mega-spinner"></div>
                  VERIFYING...
                </span>
              ) : (
                'VERIFY CODE'
              )}
            </button>
          </form>
        </div>

        {/* Simple Footer */}
        <p style={styles.footer}>
          Check your email for the verification code
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
  },
  content: {
    width: '100%',
    maxWidth: '500px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  form: {
    width: '100%',
  },
  codeInput: {
    textAlign: 'center',
    fontSize: '20px',
    letterSpacing: '8px',
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '2rem',
    fontSize: '14px',
  },
};

export default VerifyPage;
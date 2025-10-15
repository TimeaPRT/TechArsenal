import React, { useState, useEffect } from 'react';

const AuthForm = ({ mode = 'login', onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const [showButton, setShowButton] = useState(false);
  const [formFilled, setFormFilled] = useState(false);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    
    setFormData(newFormData);
    
    // Verifică dacă formularul este completat
    const isFormFilled = mode === 'login' 
      ? newFormData.email.length > 0 && newFormData.password.length > 0
      : newFormData.name.length > 0 && newFormData.email.length > 0 && newFormData.password.length > 0;
    
    setFormFilled(isFormFilled);
  };

  useEffect(() => {
    // Animație buton când formularul este completat
    if (formFilled) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [formFilled]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {mode === 'register' && (
        <div className="form-group" style={styles.formGroup}>
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="ultra-input"
            placeholder="Enter your full name"
          />
        </div>
      )}
      
      <div className="form-group" style={styles.formGroup}>
        <label className="form-label">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="ultra-input"
          placeholder="Enter your email address"
        />
      </div>
      
      <div className="form-group" style={styles.formGroup}>
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="6"
          className="ultra-input"
          placeholder="Enter your password"
        />
      </div>
      
      {/* Buton animat */}
      <div style={{
        ...styles.buttonContainer,
        ...(showButton ? styles.buttonVisible : styles.buttonHidden)
      }}>
        <button 
          type="submit" 
          disabled={loading || !formFilled}
          className="super-btn"
          style={styles.button}
        >
          {loading ? (
            <span className="btn-loading">
              <div className="mega-spinner"></div>
              PROCESSING...
            </span>
          ) : (
            mode === 'login' ? 'SIGN IN' : 'CREATE ACCOUNT'
          )}
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    width: '100%',
    position: 'relative',
  },
  formGroup: {
    marginBottom: '25px',
    transition: 'all 0.4s ease',
  },
  buttonContainer: {
    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    overflow: 'hidden',
    marginTop: '10px',
  },
  buttonHidden: {
    opacity: '0',
    transform: 'translateY(20px)',
    maxHeight: '0',
    marginTop: '0',
  },
  buttonVisible: {
    opacity: '1',
    transform: 'translateY(0)',
    maxHeight: '100px',
  },
  button: {
    transition: 'all 0.4s ease',
  },
};

export default AuthForm;
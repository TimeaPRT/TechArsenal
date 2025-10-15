import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Welcome to Your Dashboard</h1>
          <p style={styles.subtitle}>Secure 2FA Authentication System</p>
        </div>
        <button onClick={logout} className="glass-button" style={styles.logoutButton}>
          🚪 Logout
        </button>
      </div>

      {user && (
        <div className="glass-card" style={styles.userCard}>
          <div style={styles.avatar}>
            {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
          </div>
          <div style={styles.userInfo}>
            <h2 style={styles.userName}>{user.name || 'User'}</h2>
            <p style={styles.userEmail}>{user.email}</p>
            <div style={styles.status}>
              <div style={styles.statusDot}></div>
              <span>Verified Account</span>
            </div>
          </div>
        </div>
      )}

      <div style={styles.featuresGrid}>
        <div className="glass-card" style={styles.featureCard}>
          <div style={styles.featureIcon}>🔐</div>
          <h3 style={styles.featureTitle}>Two-Factor Authentication</h3>
          <p style={styles.featureText}>Your account is protected with email-based 2FA for maximum security.</p>
        </div>

        <div className="glass-card" style={styles.featureCard}>
          <div style={styles.featureIcon}>📧</div>
          <h3 style={styles.featureTitle}>Email Verification</h3>
          <p style={styles.featureText}>Secure login process with one-time codes sent to your email.</p>
        </div>

        <div className="glass-card" style={styles.featureCard}>
          <div style={styles.featureIcon}>🛡️</div>
          <h3 style={styles.featureTitle}>Account Protection</h3>
          <p style={styles.featureText}>Advanced security measures to prevent unauthorized access.</p>
        </div>

        <div className="glass-card" style={styles.featureCard}>
          <div style={styles.featureIcon}>🔍</div>
          <h3 style={styles.featureTitle}>Activity Monitoring</h3>
          <p style={styles.featureText}>Real-time monitoring of login attempts and account activity.</p>
        </div>
      </div>

      <div className="glass-card" style={styles.statsCard}>
        <h3 style={styles.statsTitle}>Security Status</h3>
        <div style={styles.statsGrid}>
          <div style={styles.statItem}>
            <div style={styles.statIcon}>✅</div>
            <div style={styles.statNumber}>Active</div>
            <div style={styles.statLabel}>2FA Status</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statIcon}>📅</div>
            <div style={styles.statNumber}>24/7</div>
            <div style={styles.statLabel}>Protection</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statIcon}>🛡️</div>
            <div style={styles.statNumber}>100%</div>
            <div style={styles.statLabel}>Secure</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '20px',
    background: 'transparent',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '20px',
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: '48px',
    fontWeight: '800',
    color: 'white',
    margin: '0 0 10px 0',
    background: 'linear-gradient(135deg, #E2801E 0%, #BCA1E7 50%, #BF3A3A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0,
  },
  logoutButton: {
    backgroundColor: 'rgba(191, 58, 58, 0.3)',
    border: '1px solid rgba(191, 58, 58, 0.5)',
  },
  userCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '30px',
    marginBottom: '40px',
    gap: '20px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #E2801E 0%, #BF3A3A 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
    flexShrink: 0,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: '28px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 5px 0',
  },
  userEmail: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: '0 0 15px 0',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '14px',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#28a745',
    animation: 'pulse 2s infinite',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginBottom: '40px',
  },
  featureCard: {
    padding: '30px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'white',
    margin: '0 0 15px 0',
  },
  featureText: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.5',
    margin: 0,
  },
  statsCard: {
    padding: '30px',
  },
  statsTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: 'white',
    margin: '0 0 25px 0',
    textAlign: 'center',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  },
  statItem: {
    textAlign: 'center',
    padding: '20px',
  },
  statIcon: {
    fontSize: '32px',
    marginBottom: '10px',
  },
  statNumber: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#E2801E',
    margin: '0 0 8px 0',
  },
  statLabel: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0,
  },
};

export default Dashboard;
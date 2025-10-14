import React, { useState, useEffect } from "react";

const Footer = ({ onPageChange }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const handleNavigation = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <footer style={{
      backgroundColor: "#000",
      padding: isMobile ? "30px 15px 15px 15px" : "40px 20px 20px 20px",
      borderTop: "2px solid #FFA500",
      color: "#FFA500",
      marginTop: "auto",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr",
        gap: isMobile ? "25px" : "30px",
        alignItems: "start",
      }}>
        
        {/* Column 1 - Brand */}
        <div style={{
          textAlign: isMobile ? "center" : "left",
        }}>
          <div style={{
            fontFamily: "'Playwrite US Modern', sans-serif",
            fontSize: isMobile ? "20px" : "22px",
            marginBottom: isMobile ? "12px" : "15px",
            color: "#FFA500",
          }}>
            CookBook Digital
          </div>
          <p style={{
            fontSize: isMobile ? "13px" : "14px",
            lineHeight: "1.5",
            opacity: 0.8,
            maxWidth: isMobile ? "300px" : "none",
            margin: isMobile ? "0 auto" : "0",
          }}>
            Discover, create, and share your favorite recipes with our digital cookbook.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div style={{
          textAlign: isMobile ? "center" : "left",
        }}>
          <h4 style={{
            fontSize: isMobile ? "15px" : "16px",
            marginBottom: isMobile ? "12px" : "15px",
            color: "#FFA500",
            borderBottom: "1px solid #333",
            paddingBottom: "5px",
          }}>
            Quick Links
          </h4>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: isMobile ? "flex" : "block",
            justifyContent: isMobile ? "center" : "flex-start",
            gap: isMobile ? "20px" : "0",
            flexWrap: isMobile ? "wrap" : "nowrap",
          }}>
            <li style={{ 
              marginBottom: isMobile ? "0" : "8px",
              marginRight: isMobile ? "0" : "0",
            }}>
              <button
                onClick={() => handleNavigation("home")}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: isMobile ? "14px" : "14px",
                  opacity: 0.8,
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: isMobile ? "8px 12px" : "0",
                  textAlign: "left",
                  borderRadius: isMobile ? "5px" : "0",
                  border: isMobile ? "1px solid #FFA500" : "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "1";
                  if (isMobile) {
                    e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "0.8";
                  if (isMobile) {
                    e.target.style.backgroundColor = "transparent";
                  }
                }}
              >
                Home
              </button>
            </li>
            <li style={{ 
              marginBottom: isMobile ? "0" : "8px",
              marginRight: isMobile ? "0" : "0",
            }}>
              <button
                onClick={() => handleNavigation("about")}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: isMobile ? "14px" : "14px",
                  opacity: 0.8,
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: isMobile ? "8px 12px" : "0",
                  textAlign: "left",
                  borderRadius: isMobile ? "5px" : "0",
                  border: isMobile ? "1px solid #FFA500" : "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "1";
                  if (isMobile) {
                    e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "0.8";
                  if (isMobile) {
                    e.target.style.backgroundColor = "transparent";
                  }
                }}
              >
                About
              </button>
            </li>
            <li style={{ 
              marginBottom: isMobile ? "0" : "8px",
            }}>
              <button
                onClick={() => handleNavigation("contact")}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: isMobile ? "14px" : "14px",
                  opacity: 0.8,
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: isMobile ? "8px 12px" : "0",
                  textAlign: "left",
                  borderRadius: isMobile ? "5px" : "0",
                  border: isMobile ? "1px solid #FFA500" : "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "1";
                  if (isMobile) {
                    e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "0.8";
                  if (isMobile) {
                    e.target.style.backgroundColor = "transparent";
                  }
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div style={{
          textAlign: isMobile ? "center" : "left",
        }}>
          <h4 style={{
            fontSize: isMobile ? "15px" : "16px",
            marginBottom: isMobile ? "12px" : "15px",
            color: "#FFA500",
            borderBottom: "1px solid #333",
            paddingBottom: "5px",
          }}>
            Contact
          </h4>
          <p style={{ 
            fontSize: isMobile ? "13px" : "14px", 
            marginBottom: "8px", 
            opacity: 0.8,
            wordBreak: "break-word",
          }}>
            📧 contact@cookbook.com
          </p>
          <p style={{ 
            fontSize: isMobile ? "13px" : "14px", 
            marginBottom: isMobile ? "15px" : "8px", 
            opacity: 0.8 
          }}>
            🌍 Made with ❤️
          </p>
          <button
            onClick={() => handleNavigation("contact")}
            style={{
              color: "#FFA500",
              fontSize: isMobile ? "13px" : "12px",
              backgroundColor: "transparent",
              border: "1px solid #FFA500",
              borderRadius: "5px",
              padding: isMobile ? "10px 20px" : "5px 10px",
              cursor: "pointer",
              marginTop: isMobile ? "0" : "10px",
              transition: "all 0.3s ease",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? "200px" : "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFA500";
              e.target.style.color = "#000";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#FFA500";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </button>
        </div>

      </div>

      {/* Copyright bottom */}
      <div style={{
        borderTop: "1px solid #333",
        marginTop: isMobile ? "25px" : "30px",
        paddingTop: isMobile ? "15px" : "20px",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: isMobile ? "11px" : "12px",
          opacity: 0.6,
          margin: 0,
        }}>
          © 2024 CookBook Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
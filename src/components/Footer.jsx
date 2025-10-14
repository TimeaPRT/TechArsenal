import React from "react";

const Footer = ({ onPageChange }) => {
  const handleNavigation = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <footer style={{
      backgroundColor: "#000",
      padding: "40px 20px 20px 20px",
      borderTop: "2px solid #FFA500",
      color: "#FFA500",
      marginTop: "auto",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "30px",
        alignItems: "start",
      }}>
        
        {/* Column 1 - Brand */}
        <div>
          <div style={{
            fontFamily: "'Playwrite US Modern', sans-serif",
            fontSize: "22px",
            marginBottom: "15px",
            color: "#FFA500",
          }}>
            CookBook Digital
          </div>
          <p style={{
            fontSize: "14px",
            lineHeight: "1.5",
            opacity: 0.8,
          }}>
            Discover, create, and share your favorite recipes with our digital cookbook.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 style={{
            fontSize: "16px",
            marginBottom: "15px",
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
          }}>
            <li style={{ marginBottom: "8px" }}>
              <button
                onClick={() => handleNavigation("home")}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: "14px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => e.target.style.opacity = "1"}
                onMouseLeave={(e) => e.target.style.opacity = "0.8"}
              >
                Home
              </button>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <button
                onClick={() => handleNavigation("about")}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: "14px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => e.target.style.opacity = "1"}
                onMouseLeave={(e) => e.target.style.opacity = "0.8"}
              >
                About
              </button>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <button
                onClick={() => handleNavigation("contact")}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: "14px",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => e.target.style.opacity = "1"}
                onMouseLeave={(e) => e.target.style.opacity = "0.8"}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h4 style={{
            fontSize: "16px",
            marginBottom: "15px",
            color: "#FFA500",
            borderBottom: "1px solid #333",
            paddingBottom: "5px",
          }}>
            Contact
          </h4>
          <p style={{ fontSize: "14px", marginBottom: "8px", opacity: 0.8 }}>
            📧 contact@cookbook.com
          </p>
          <p style={{ fontSize: "14px", marginBottom: "8px", opacity: 0.8 }}>
            🌍 Made with ❤️
          </p>
          <button
            onClick={() => handleNavigation("contact")}
            style={{
              color: "#FFA500",
              fontSize: "12px",
              backgroundColor: "transparent",
              border: "1px solid #FFA500",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
              marginTop: "10px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFA500";
              e.target.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#FFA500";
            }}
          >
            Get in Touch
          </button>
        </div>

      </div>

      {/* Copyright bottom */}
      <div style={{
        borderTop: "1px solid #333",
        marginTop: "30px",
        paddingTop: "20px",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: "12px",
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
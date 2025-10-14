import React, { useState, useEffect } from "react";

const Header = ({ onPageChange }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const handleNavigation = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
    // Close mobile menu after navigation
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header style={{
      backgroundColor: "#000",
      padding: isMobile ? "15px" : "20px",
      borderBottom: "2px solid #FFA500",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    }}>
      {/* Logo */}
      <div 
        style={{
          fontFamily: "'Playwrite US Modern', sans-serif",
          fontSize: isMobile ? "20px" : "24px",
          color: "#FFA500",
          textDecoration: "none",
          cursor: "pointer",
          zIndex: 1001,
        }}
        onClick={() => handleNavigation("home")}
      >
        CookBook Digital
      </div>
      
      {/* Desktop Navigation */}
      {!isMobile && (
        <nav>
          <ul style={{
            display: "flex",
            listStyle: "none",
            gap: isMobile ? "10px" : "20px",
            margin: 0,
            padding: 0,
          }}>
            <li>
              <button
                onClick={() => handleNavigation("home")}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: isMobile ? "14px" : "16px",
                  padding: isMobile ? "6px 12px" : "8px 16px",
                  borderRadius: "5px",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("about")}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: isMobile ? "14px" : "16px",
                  padding: isMobile ? "6px 12px" : "8px 16px",
                  borderRadius: "5px",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("contact")}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: isMobile ? "14px" : "16px",
                  padding: isMobile ? "6px 12px" : "8px 16px",
                  borderRadius: "5px",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          style={{
            backgroundColor: "transparent",
            border: "1px solid #FFA500",
            borderRadius: "5px",
            color: "#FFA500",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1001,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
          }}
        >
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}>
          <button
            onClick={() => handleNavigation("home")}
            style={{
              color: "#FFA500",
              fontSize: "20px",
              padding: "15px 30px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              backgroundColor: "transparent",
              border: "2px solid #FFA500",
              cursor: "pointer",
              fontWeight: "bold",
              width: "200px",
              textAlign: "center",
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
            Home
          </button>
          <button
            onClick={() => handleNavigation("about")}
            style={{
              color: "#FFA500",
              fontSize: "20px",
              padding: "15px 30px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              backgroundColor: "transparent",
              border: "2px solid #FFA500",
              cursor: "pointer",
              fontWeight: "bold",
              width: "200px",
              textAlign: "center",
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
            About
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            style={{
              color: "#FFA500",
              fontSize: "20px",
              padding: "15px 30px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              backgroundColor: "transparent",
              border: "2px solid #FFA500",
              cursor: "pointer",
              fontWeight: "bold",
              width: "200px",
              textAlign: "center",
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
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
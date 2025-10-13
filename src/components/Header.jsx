import React from "react";

const Header = ({ onPageChange }) => {
  const handleNavigation = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <header style={{
      backgroundColor: "#000",
      padding: "20px",
      borderBottom: "2px solid #FFA500",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <div 
        style={{
          fontFamily: "'Playwrite US Modern', sans-serif",
          fontSize: "24px",
          color: "#FFA500",
          textDecoration: "none",
          cursor: "pointer",
        }}
        onClick={() => handleNavigation("home")}
      >
        CookBook Digital
      </div>
      
      <nav>
        <ul style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}>
          <li>
            <button
              onClick={() => handleNavigation("home")}
              style={{
                color: "#FFA500",
                textDecoration: "none",
                fontSize: "16px",
                padding: "8px 16px",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
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
                fontSize: "16px",
                padding: "8px 16px",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
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
                fontSize: "16px",
                padding: "8px 16px",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
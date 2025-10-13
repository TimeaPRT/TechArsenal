import React from "react";

const RecipeCard = ({ recipe, onRecipeClick }) => {
  const handleClick = () => {
    if (onRecipeClick) {
      onRecipeClick(recipe);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        borderRadius: "15px",
        padding: "20px",
        width: "300px",
        border: "2px solid #FFA500",
        cursor: onRecipeClick ? "pointer" : "default",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: "0 4px 8px rgba(255, 165, 0, 0.2)",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        if (onRecipeClick) {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(255, 165, 0, 0.3)";
        }
      }}
      onMouseLeave={(e) => {
        if (onRecipeClick) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(255, 165, 0, 0.2)";
        }
      }}
    >
      <img 
        src={recipe.image} 
        alt={recipe.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "15px",
        }}
        onError={(e) => {
          e.target.src = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop";
        }}
      />
      <h3 style={{
        fontFamily: "'Playwrite US Modern', sans-serif",
        fontSize: "20px",
        marginBottom: "10px",
        color: "#FFA500",
      }}>
        {recipe.title}
      </h3>
      <p style={{
        fontSize: "14px",
        lineHeight: "1.4",
        color: "#FFA500",
        opacity: 0.9,
      }}>
        {recipe.description}
      </p>
      
      {/* Indicator pentru click */}
      {onRecipeClick && (
        <div style={{
          marginTop: "15px",
          fontSize: "12px",
          color: "#FFA500",
          opacity: 0.7,
          textAlign: "center",
        }}>
          Click pentru detalii
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
import React, { useState, useEffect } from "react";

const RecipeCard = ({ recipe, onRecipeClick, onDeleteRecipe, onEditRecipe }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const handleClick = () => {
    if (onRecipeClick) {
      onRecipeClick(recipe);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${recipe.title}"?`)) {
      onDeleteRecipe(recipe._id);
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    if (onEditRecipe) {
      onEditRecipe(recipe);
    }
  };

  // Responsive card dimensions
  const cardWidth = isMobile ? "100%" : isTablet ? "280px" : "300px";
  const imageHeight = isMobile ? "180px" : "200px";
  const fontSizeTitle = isMobile ? "18px" : "20px";
  const fontSizeText = isMobile ? "13px" : "14px";
  const fontSizeSmall = isMobile ? "11px" : "12px";

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        borderRadius: "15px",
        padding: isMobile ? "15px" : "20px",
        width: cardWidth,
        maxWidth: "100%",
        border: "2px solid #FFA500",
        cursor: onRecipeClick ? "pointer" : "default",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(255, 165, 0, 0.2)",
        position: "relative",
        margin: isMobile ? "0 auto 20px" : "0",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        if (onRecipeClick && !isMobile) {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 12px 25px rgba(255, 165, 0, 0.3)";
        }
      }}
      onMouseLeave={(e) => {
        if (onRecipeClick && !isMobile) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 165, 0, 0.2)";
        }
      }}
    >
      {/* Action Buttons */}
      <div style={{
        position: "absolute",
        top: isMobile ? "8px" : "10px",
        right: isMobile ? "8px" : "10px",
        display: "flex",
        gap: isMobile ? "3px" : "5px",
        zIndex: 10,
      }}>
        {/* Edit Button */}
        {onEditRecipe && (
          <button
            onClick={handleEdit}
            style={{
              background: "rgba(255, 165, 0, 0.95)",
              border: "none",
              borderRadius: "50%",
              width: isMobile ? "28px" : "32px",
              height: isMobile ? "28px" : "32px",
              color: "#000",
              cursor: "pointer",
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            title="Edit recipe"
          >
            ✏️
          </button>
        )}
        
        {/* Delete Button */}
        {onDeleteRecipe && (
          <button
            onClick={handleDelete}
            style={{
              background: "rgba(255, 0, 0, 0.9)",
              border: "none",
              borderRadius: "50%",
              width: isMobile ? "28px" : "32px",
              height: isMobile ? "28px" : "32px",
              color: "white",
              cursor: "pointer",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            title="Delete recipe"
          >
            ×
          </button>
        )}
      </div>

      {/* Recipe Image */}
      <img 
        src={recipe.image} 
        alt={recipe.title}
        style={{
          width: "100%",
          height: imageHeight,
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: isMobile ? "12px" : "15px",
        }}
        onError={(e) => {
          e.target.src = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop";
        }}
      />
      
      {/* Recipe Title */}
      <h3 style={{
        fontFamily: "'Playwrite US Modern', sans-serif",
        fontSize: fontSizeTitle,
        marginBottom: isMobile ? "8px" : "10px",
        color: "#FFA500",
        minHeight: isMobile ? "40px" : "48px",
        display: "flex",
        alignItems: "center",
        lineHeight: "1.3",
        paddingRight: "10px",
      }}>
        {recipe.title}
      </h3>

      {/* Recipe Description */}
      <p style={{
        fontSize: fontSizeText,
        lineHeight: "1.4",
        color: "#FFA500",
        opacity: 0.9,
        minHeight: isMobile ? "36px" : "40px",
        display: "flex",
        alignItems: "center",
        marginBottom: isMobile ? "12px" : "15px",
      }}>
        {recipe.description}
      </p>
      
      {/* Recipe Info */}
      <div style={{
        marginTop: "15px",
        paddingTop: "15px",
        borderTop: "1px solid #FFA500",
        opacity: 0.8,
      }}>
        {/* Ingredients & Steps Count */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: fontSizeSmall,
          marginBottom: isMobile ? "6px" : "8px",
        }}>
          <span>
            {recipe.ingredients && recipe.ingredients.length > 0 
              ? `${recipe.ingredients.length} ingredient${recipe.ingredients.length !== 1 ? 's' : ''}` 
              : 'No ingredients'
            }
          </span>
          <span>
            {recipe.instructions && recipe.instructions.length > 0 
              ? `${recipe.instructions.length} step${recipe.instructions.length !== 1 ? 's' : ''}` 
              : 'No instructions'
            }
          </span>
        </div>

        {/* Prep Time, Servings, Difficulty */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr",
          gap: isMobile ? "4px" : "6px",
          fontSize: fontSizeSmall,
        }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "4px",
            justifyContent: isMobile ? "flex-start" : "center"
          }}>
            <span>⏱️</span>
            <span style={{ 
              fontSize: isMobile ? "10px" : fontSizeSmall,
              textAlign: "center"
            }}>
              {recipe.prepTime}
            </span>
          </div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "4px",
            justifyContent: isMobile ? "flex-start" : "center"
          }}>
            <span>👥</span>
            <span style={{ 
              fontSize: isMobile ? "10px" : fontSizeSmall,
              textAlign: "center"
            }}>
              {recipe.servings} serving{recipe.servings !== 1 ? 's' : ''}
            </span>
          </div>
          {!isMobile && (
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "4px",
              justifyContent: "center"
            }}>
              <span>📊</span>
              <span style={{ textAlign: "center" }}>
                {recipe.difficulty}
              </span>
            </div>
          )}
        </div>

        {/* Show difficulty on mobile in a separate row */}
        {isMobile && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            justifyContent: "center",
            marginTop: "6px",
            fontSize: fontSizeSmall,
          }}>
            <span>📊</span>
            <span>{recipe.difficulty}</span>
          </div>
        )}
      </div>
      
      {/* Click Indicator */}
      {onRecipeClick && (
        <div style={{
          marginTop: "15px",
          fontSize: fontSizeSmall,
          color: "#FFA500",
          opacity: 0.7,
          textAlign: "center",
          padding: isMobile ? "4px" : "5px",
          border: "1px dashed #FFA500",
          borderRadius: "5px",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => e.target.style.opacity = "1"}
        onMouseLeave={(e) => e.target.style.opacity = "0.7"}
        >
          {isMobile ? "Tap for details" : "Click for details"}
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
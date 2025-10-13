import React from "react";

const RecipeDetails = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      padding: "20px",
    }}>
      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "30px",
        borderRadius: "15px",
        width: "90%",
        maxWidth: "800px",
        maxHeight: "90vh",
        overflowY: "auto",
        border: "2px solid #FFA500",
        color: "#FFA500",
        position: "relative",
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            backgroundColor: "transparent",
            border: "none",
            color: "#FFA500",
            fontSize: "24px",
            cursor: "pointer",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>

        {/* Header with title and image */}
        <div style={{
          display: "flex",
          gap: "30px",
          marginBottom: "30px",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
        }}>
          {/* Image */}
          <div style={{
            flex: "0 0 300px",
          }}>
            <img 
              src={recipe.image} 
              alt={recipe.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "2px solid #FFA500",
              }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop";
              }}
            />
          </div>

          {/* Title and description */}
          <div style={{ flex: 1 }}>
            <h2 style={{
              fontFamily: "'Playwrite US Modern', sans-serif",
              fontSize: "28px",
              marginBottom: "15px",
              color: "#FFA500",
            }}>
              {recipe.title}
            </h2>
            <p style={{
              fontSize: "16px",
              lineHeight: "1.5",
              marginBottom: "20px",
            }}>
              {recipe.description}
            </p>
          </div>
        </div>

        {/* Ingredients */}
        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <h3 style={{
              fontFamily: "'Playwrite US Modern', sans-serif",
              fontSize: "22px",
              marginBottom: "15px",
              color: "#FFA500",
              borderBottom: "1px solid #FFA500",
              paddingBottom: "5px",
            }}>
              Ingredients
            </h3>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} style={{
                  padding: "8px 0",
                  borderBottom: "1px solid #333",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <span style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#FFA500",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Instructions */}
        {recipe.instructions && recipe.instructions.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <h3 style={{
              fontFamily: "'Playwrite US Modern', sans-serif",
              fontSize: "22px",
              marginBottom: "15px",
              color: "#FFA500",
              borderBottom: "1px solid #FFA500",
              paddingBottom: "5px",
            }}>
              Instructions
            </h3>
            <ol style={{
              paddingLeft: "20px",
              margin: 0,
            }}>
              {recipe.instructions.map((instruction, index) => (
                <li key={index} style={{
                  padding: "10px 0",
                  borderBottom: "1px solid #333",
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Additional Information */}
        <div style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          paddingTop: "20px",
          borderTop: "1px solid #333",
          flexWrap: "wrap",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            <span style={{ fontWeight: "bold" }}>ID:</span>
            <span>#{recipe.id}</span>
          </div>
          
          {recipe.prepTime && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span style={{ fontWeight: "bold" }}>Prep Time:</span>
              <span>{recipe.prepTime}</span>
            </div>
          )}
          
          {recipe.difficulty && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span style={{ fontWeight: "bold" }}>Difficulty:</span>
              <span>{recipe.difficulty}</span>
            </div>
          )}
        </div>

        {/* Close Button at bottom */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}>
          <button
            onClick={onClose}
            style={{
              padding: "12px 30px",
              backgroundColor: "transparent",
              border: "2px solid #FFA500",
              color: "#FFA500",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "'Playwrite US Modern', sans-serif",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
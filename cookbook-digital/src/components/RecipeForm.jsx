import React, { useState, useEffect } from "react";

const RecipeForm = ({ onAddRecipe, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    ingredients: "",
    instructions: "",
    prepTime: "",
    servings: "",
    difficulty: "Medium"
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.title.trim() || !formData.description.trim() || !formData.prepTime.trim() || !formData.servings) {
      alert("Please fill in all required fields (title, description, prep time, and servings)!");
      return;
    }

    // Create new recipe object - NO ID, MongoDB will generate it
    const newRecipe = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      image: formData.image.trim() || "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
      ingredients: formData.ingredients.trim().split('\n').filter(line => line.trim()),
      instructions: formData.instructions.trim().split('\n').filter(line => line.trim()),
      prepTime: formData.prepTime.trim(),
      servings: parseInt(formData.servings),
      difficulty: formData.difficulty
    };

    // Call add function
    onAddRecipe(newRecipe);
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      image: "",
      ingredients: "",
      instructions: "",
      prepTime: "",
      servings: "",
      difficulty: "Medium"
    });
  };

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
      alignItems: isMobile ? "flex-start" : "center",
      zIndex: 1000,
      padding: isMobile ? "10px" : "0",
      overflowY: "auto",
    }}>
      <div style={{
        backgroundColor: "#1a1a1a",
        padding: isMobile ? "15px" : "30px",
        borderRadius: "15px",
        width: isMobile ? "95%" : "90%",
        maxWidth: "500px",
        border: "2px solid #FFA500",
        color: "#FFA500",
        maxHeight: isMobile ? "95vh" : "90vh",
        overflowY: "auto",
        marginTop: isMobile ? "10px" : "0",
        marginBottom: isMobile ? "10px" : "0",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}>
          <h2 style={{
            fontFamily: "'Playwrite US Modern', sans-serif",
            fontSize: isMobile ? "18px" : "24px",
            margin: 0,
          }}>
            Add New Recipe
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#FFA500",
              fontSize: isMobile ? "20px" : "24px",
              cursor: "pointer",
              padding: "0",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: isMobile ? "14px" : "16px" }}>
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: Pizza Margherita"
              style={{
                width: "100%",
                padding: isMobile ? "12px" : "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: isMobile ? "16px" : "16px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: isMobile ? "14px" : "16px" }}>
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Short description of the recipe..."
              rows={isMobile ? "2" : "3"}
              style={{
                width: "100%",
                padding: isMobile ? "12px" : "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: isMobile ? "16px" : "16px",
                resize: "vertical",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
              required
            />
          </div>

          {/* Prep Time and Servings - Side by side on desktop, stacked on mobile */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "15px",
            marginBottom: "15px",
          }}>
            {/* Prep Time */}
            <div>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: isMobile ? "14px" : "16px" }}>
                Preparation Time *
              </label>
              <input
                type="text"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
                placeholder="Ex: 30 minutes"
                style={{
                  width: "100%",
                  padding: isMobile ? "12px" : "10px",
                  borderRadius: "5px",
                  border: "1px solid #FFA500",
                  backgroundColor: "#000",
                  color: "#FFA500",
                  fontSize: isMobile ? "16px" : "16px",
                  boxSizing: "border-box",
                }}
                required
              />
            </div>

            {/* Servings */}
            <div>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: isMobile ? "14px" : "16px" }}>
                Servings *
              </label>
              <input
                type="number"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                placeholder="Ex: 4"
                min="1"
                style={{
                  width: "100%",
                  padding: isMobile ? "12px" : "10px",
                  borderRadius: "5px",
                  border: "1px solid #FFA500",
                  backgroundColor: "#000",
                  color: "#FFA500",
                  fontSize: isMobile ? "16px" : "16px",
                  boxSizing: "border-box",
                }}
                required
              />
            </div>
          </div>

          {/* Difficulty */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: isMobile ? "14px" : "16px" }}>
              Difficulty *
            </label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: isMobile ? "12px" : "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: isMobile ? "16px" : "16px",
                boxSizing: "border-box",
              }}
              required
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Image */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: isMobile ? "14px" : "16px" }}>
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              style={{
                width: "100%",
                padding: isMobile ? "12px" : "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: isMobile ? "16px" : "16px",
                boxSizing: "border-box",
              }}
            />
            <small style={{ fontSize: isMobile ? "11px" : "12px", opacity: 0.7, display: "block", marginTop: "5px" }}>
              Leave empty for default food image
            </small>
          </div>

          {/* Ingredients */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: isMobile ? "14px" : "16px" }}>
              Ingredients (one per line)
            </label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="300g flour&#10;200ml water&#10;1 tsp yeast"
              rows={isMobile ? "3" : "4"}
              style={{
                width: "100%",
                padding: isMobile ? "12px" : "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: isMobile ? "16px" : "16px",
                resize: "vertical",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Instructions */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: isMobile ? "14px" : "16px" }}>
              Instructions (one step per line)
            </label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="Mix flour with water...&#10;Let the dough rise..."
              rows={isMobile ? "3" : "4"}
              style={{
                width: "100%",
                padding: isMobile ? "12px" : "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: isMobile ? "16px" : "16px",
                resize: "vertical",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Buttons */}
          <div style={{
            display: "flex",
            gap: "10px",
            justifyContent: isMobile ? "space-between" : "flex-end",
            flexDirection: isMobile ? "column" : "row",
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: isMobile ? "14px" : "10px 20px",
                backgroundColor: "transparent",
                border: "1px solid #FFA500",
                color: "#FFA500",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: isMobile ? "16px" : "16px",
                fontWeight: "bold",
                width: isMobile ? "100%" : "auto",
                boxSizing: "border-box",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: isMobile ? "14px" : "10px 20px",
                backgroundColor: "#FFA500",
                border: "none",
                color: "#000",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: isMobile ? "16px" : "16px",
                fontWeight: "bold",
                width: isMobile ? "100%" : "auto",
                boxSizing: "border-box",
              }}
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
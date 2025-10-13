import React, { useState } from "react";

const RecipeForm = ({ onAddRecipe, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    ingredients: "",
    instructions: ""
  });

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
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please fill in the title and description!");
      return;
    }

    // Create new recipe object
    const newRecipe = {
      id: Date.now(), // Unique ID based on timestamp
      title: formData.title.trim(),
      description: formData.description.trim(),
      image: formData.image.trim() || "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop", // Default image if not provided
      ingredients: formData.ingredients.trim().split('\n').filter(line => line.trim()), // Array from textarea
      instructions: formData.instructions.trim().split('\n').filter(line => line.trim()) // Array from textarea
    };

    // Call add function
    onAddRecipe(newRecipe);
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      image: "",
      ingredients: "",
      instructions: ""
    });
    
    // Close form
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "30px",
        borderRadius: "15px",
        width: "90%",
        maxWidth: "500px",
        border: "2px solid #FFA500",
        color: "#FFA500",
      }}>
        <h2 style={{
          fontFamily: "'Playwrite US Modern', sans-serif",
          marginBottom: "20px",
          textAlign: "center",
          fontSize: "24px",
        }}>
          Add New Recipe
        </h2>
        
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
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
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: "16px",
              }}
              required
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Short description of the recipe..."
              rows="3"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: "16px",
                resize: "vertical",
              }}
              required
            />
          </div>

          {/* Image */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
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
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: "16px",
              }}
            />
          </div>

          {/* Ingredients */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Ingredients (one per line)
            </label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Ex: 
300g flour
200ml water
1 tsp yeast"
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: "16px",
                resize: "vertical",
              }}
            />
          </div>

          {/* Instructions */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Instructions (one step per line)
            </label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="Ex: 
Mix flour with water...
Let the dough rise..."
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #FFA500",
                backgroundColor: "#000",
                color: "#FFA500",
                fontSize: "16px",
                resize: "vertical",
              }}
            />
          </div>

          {/* Buttons */}
          <div style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "10px 20px",
                backgroundColor: "transparent",
                border: "1px solid #FFA500",
                color: "#FFA500",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#FFA500",
                border: "none",
                color: "#000",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
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
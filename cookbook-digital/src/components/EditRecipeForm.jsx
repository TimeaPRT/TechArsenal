import React, { useState, useEffect } from "react";

const EditRecipeForm = ({ recipe, onUpdateRecipe, onClose }) => {
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

  // Populate form with recipe data when component mounts or recipe changes
  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title || "",
        description: recipe.description || "",
        image: recipe.image || "",
        ingredients: recipe.ingredients ? recipe.ingredients.join('\n') : "",
        instructions: recipe.instructions ? recipe.instructions.join('\n') : "",
        prepTime: recipe.prepTime || "",
        servings: recipe.servings || "",
        difficulty: recipe.difficulty || "Medium"
      });
    }
  }, [recipe]);

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

    // Create updated recipe object
    const updatedRecipe = {
      ...recipe, // Keep the original _id and other fields
      title: formData.title.trim(),
      description: formData.description.trim(),
      image: formData.image.trim() || "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
      ingredients: formData.ingredients.trim().split('\n').filter(line => line.trim()),
      instructions: formData.instructions.trim().split('\n').filter(line => line.trim()),
      prepTime: formData.prepTime.trim(),
      servings: parseInt(formData.servings),
      difficulty: formData.difficulty
    };

    // Call update function
    onUpdateRecipe(updatedRecipe);
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
        maxHeight: "90vh",
        overflowY: "auto",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}>
          <h2 style={{
            fontFamily: "'Playwrite US Modern', sans-serif",
            fontSize: "24px",
            margin: 0,
          }}>
            Edit Recipe
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#FFA500",
              fontSize: "24px",
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
                fontFamily: "inherit",
              }}
              required
            />
          </div>

          {/* Prep Time */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Preparation Time *
            </label>
            <input
              type="text"
              name="prepTime"
              value={formData.prepTime}
              onChange={handleChange}
              placeholder="Ex: 30 minutes, 1 hour 15 minutes"
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

          {/* Servings */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
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

          {/* Difficulty */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Difficulty *
            </label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
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
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
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
            <small style={{ fontSize: "12px", opacity: 0.7 }}>
              Leave empty for default food image
            </small>
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
              placeholder="300g flour&#10;200ml water&#10;1 tsp yeast"
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
                fontFamily: "inherit",
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
              placeholder="Mix flour with water...&#10;Let the dough rise..."
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
                fontFamily: "inherit",
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
                fontWeight: "bold",
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
              Update Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecipeForm;
import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";
import EditRecipeForm from "../components/EditRecipeForm";
import RecipeDetails from "../pages/RecipeDetails";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Hardcoded recipes as fallback
const hardcodedRecipes = [
  {
    _id: 1,
    title: "Pizza Margherita",
    description: "A classic Italian recipe with mozzarella, tomatoes, and fresh basil.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
    ingredients: [
      "300g flour",
      "200ml warm water",
      "7g dry yeast",
      "1 tsp sugar",
      "1 tsp salt",
      "2 tbsp olive oil",
      "200g tomato sauce",
      "250g mozzarella",
      "10 fresh basil leaves",
      "Extra virgin olive oil"
    ],
    instructions: [
      "Mix flour with yeast, sugar, and salt.",
      "Add water and oil, knead until you get a homogeneous dough.",
      "Let the dough rise for 1 hour.",
      "Spread the dough on a baking tray, add tomato sauce.",
      "Place sliced mozzarella and basil.",
      "Bake at 220°C for 15-20 minutes."
    ],
    prepTime: "1 hour 30 minutes",
    servings: 4,
    difficulty: "Medium"
  },
  {
    _id: 2,
    title: "Spaghetti Carbonara",
    description: "Creamy spaghetti with bacon, egg, and parmesan, very tasty.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&h=200&fit=crop",
    ingredients: [
      "400g spaghetti",
      "200g guanciale or pancetta",
      "4 eggs",
      "100g grated parmesan",
      "Salt and freshly ground black pepper",
      "2 garlic cloves"
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "Cut meat into small cubes and fry until crispy.",
      "Beat eggs with parmesan, salt, and pepper.",
      "Mix pasta with fried meat.",
      "Add egg mixture and mix quickly.",
      "Serve immediately with extra parmesan."
    ],
    prepTime: "30 minutes",
    servings: 4,
    difficulty: "Easy"
  },
  {
    _id: 3,
    title: "Tiramisu",
    description: "Delicious Italian dessert with mascarpone, coffee, and cocoa.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop",
    ingredients: [
      "500g mascarpone",
      "6 eggs",
      "150g sugar",
      "300ml strong cooled coffee",
      "200g savoiardi cookies",
      "Cocoa powder for decoration",
      "2 tbsp rum or amaretto (optional)"
    ],
    instructions: [
      "Separate egg whites from yolks.",
      "Beat yolks with sugar until fluffy.",
      "Add mascarpone and mix gently.",
      "Beat egg whites until stiff and incorporate them.",
      "Dip cookies in coffee and arrange them in a dish.",
      "Alternate layers of cream and cookies.",
      "Refrigerate for 6 hours or overnight.",
      "Sprinkle cocoa before serving."
    ],
    prepTime: "40 minutes + 6 hours chilling",
    servings: 8,
    difficulty: "Medium"
  },
  {
    _id: 4,
    title: "Lasagna",
    description: "Delicious layers of pasta, meat, and béchamel sauce.",
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=300&h=200&fit=crop",
    ingredients: [
      "12 lasagna sheets",
      "500g mixed ground meat",
      "1 large onion",
      "2 garlic cloves",
      "800g tomato sauce",
      "200g mozzarella",
      "100g parmesan",
      "50g butter",
      "50g flour",
      "500ml milk",
      "Salt, pepper, basil"
    ],
    instructions: [
      "Prepare béchamel sauce: melt butter, add flour, mix, gradually add milk.",
      "Fry onion and garlic, add meat.",
      "Add tomato sauce and season.",
      "Alternate layers: lasagna, meat sauce, béchamel, parmesan.",
      "Repeat until ingredients are finished.",
      "Cover with mozzarella and parmesan.",
      "Bake at 180°C for 40 minutes."
    ],
    prepTime: "1 hour 15 minutes",
    servings: 6,
    difficulty: "Medium"
  },
  {
    _id: 5,
    title: "Mushroom Risotto",
    description: "Creamy risotto with fresh mushrooms and parmesan.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&h=200&fit=crop",
    ingredients: [
      "400g Arborio rice",
      "300g mixed mushrooms",
      "1 small onion",
      "2 garlic cloves",
      "1.5L chicken broth",
      "100ml white wine",
      "100g grated parmesan",
      "50g butter",
      "2 tbsp olive oil",
      "Salt, pepper, parsley"
    ],
    instructions: [
      "Heat chicken broth and keep it on low heat.",
      "Fry onion and garlic in oil.",
      "Add rice and fry for 2 minutes.",
      "Add wine and let it evaporate.",
      "Add broth one ladle at a time, stirring continuously.",
      "Add sliced mushrooms halfway through.",
      "When rice is ready, add butter and parmesan.",
      "Serve immediately with fresh parsley."
    ],
    prepTime: "45 minutes",
    servings: 4,
    difficulty: "Medium"
  },
  {
    _id: 6,
    title: "Panna Cotta",
    description: "Delicate Italian dessert with vanilla and fruit sauce.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop",
    ingredients: [
      "500ml whipping cream",
      "100g sugar",
      "8g gelatin (4 sheets)",
      "1 tsp vanilla extract",
      "200g fresh berries",
      "2 tbsp sugar for sauce",
      "1 tsp lemon juice"
    ],
    instructions: [
      "Soak gelatin in cold water for 5 minutes.",
      "Heat half the cream with sugar and vanilla.",
      "Add squeezed gelatin and stir until dissolved.",
      "Add the remaining cold cream and mix.",
      "Pour into molds and refrigerate for 4 hours.",
      "Prepare sauce: mix berries with sugar and lemon juice.",
      "Unmold panna cotta and serve with fruit sauce."
    ],
    prepTime: "20 minutes + 4 hours chilling",
    servings: 6,
    difficulty: "Easy"
  },
  {
    _id: 7,
    title: "Bruschetta",
    description: "Toasted bread with tomatoes, garlic, and fresh basil.",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop",
    ingredients: [
      "8 slices Italian bread",
      "4 large tomatoes",
      "2 garlic cloves",
      "10 fresh basil leaves",
      "4 tbsp extra virgin olive oil",
      "Sea salt",
      "Freshly ground black pepper"
    ],
    instructions: [
      "Cut tomatoes into small cubes.",
      "Mix tomatoes with chopped basil, salt, and pepper.",
      "Toast bread on grill or in pan.",
      "Rub bread with cut garlic.",
      "Place tomato mixture over bread.",
      "Drizzle with olive oil and serve immediately."
    ],
    prepTime: "15 minutes",
    servings: 4,
    difficulty: "Easy"
  },
  {
    _id: 8,
    title: "Minestrone",
    description: "Dense Italian soup with vegetables and pasta.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop",
    ingredients: [
      "1 onion",
      "2 carrots",
      "2 celery stalks",
      "2 garlic cloves",
      "400g diced tomatoes",
      "200g bean beans",
      "100g small pasta",
      "2 liters vegetable broth",
      "Salt, pepper, dried basil",
      "Parmesan for serving"
    ],
    instructions: [
      "Cut all vegetables into small cubes.",
      "Fry onion, carrots, and celery in oil.",
      "Add garlic and tomatoes, cook for 5 minutes.",
      "Add broth and simmer for 20 minutes.",
      "Add beans and pasta, cook for 10 minutes.",
      "Season with salt, pepper, and basil.",
      "Serve with grated parmesan on top."
    ],
    prepTime: "45 minutes",
    servings: 6,
    difficulty: "Easy"
  },
  {
    _id: 9,
    title: "Gelato",
    description: "Creamy Italian ice cream with natural flavors.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop",
    ingredients: [
      "500ml whole milk",
      "250ml cream",
      "150g sugar",
      "4 egg yolks",
      "1 tsp vanilla extract",
      "50g roasted nuts (optional)",
      "50g dark chocolate (optional)"
    ],
    instructions: [
      "Heat milk with half the sugar.",
      "Beat egg yolks with remaining sugar.",
      "Pour milk over egg yolks, stirring continuously.",
      "Return mixture to pan and cook until thickened.",
      "Add cream and vanilla, mix.",
      "Let cool completely.",
      "Prepare in ice cream maker or freezer.",
      "Add nuts or chocolate in the last minutes."
    ],
    prepTime: "35 minutes + 4 hours freezing",
    servings: 8,
    difficulty: "Hard"
  }
];

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch recipes from backend
  const fetchRecipes = async () => {
    try {
      console.log("Fetching recipes from backend...");
      const response = await axios.get(`${API_URL}/recipes`);
      console.log("Recipes fetched from API:", response.data);
      
      if (response.data && response.data.length > 0) {
        // Use recipes from database
        setRecipes(response.data);
        setUsingFallback(false);
      } else {
        // Use hardcoded recipes as fallback
        console.log("No recipes in database, using fallback recipes");
        setRecipes(hardcodedRecipes);
        setUsingFallback(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      // Use hardcoded recipes if API fails
      console.log("API failed, using fallback recipes");
      setRecipes(hardcodedRecipes);
      setUsingFallback(true);
      setLoading(false);
    }
  };

  // Load recipes when component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleAddRecipe = async (newRecipe) => {
    try {
      console.log("Adding new recipe:", newRecipe);
      
      // Try to send to backend first
      try {
        const response = await axios.post(`${API_URL}/recipes`, newRecipe);
        console.log("Recipe added to database:", response.data);
        
        // Update frontend state with the recipe from backend
        setRecipes(prevRecipes => [...prevRecipes, response.data]);
        setUsingFallback(false);
      } catch (apiError) {
        console.error("Failed to add to database, adding locally:", apiError);
        // If backend fails, add locally to frontend state
        const localRecipe = {
          ...newRecipe,
          _id: Date.now() // Generate temporary ID
        };
        setRecipes(prevRecipes => [...prevRecipes, localRecipe]);
      }
      
      // Close the form
      setShowForm(false);
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Error adding recipe. Please try again.");
    }
  };

  const handleUpdateRecipe = async (updatedRecipe) => {
    try {
      console.log("Updating recipe:", updatedRecipe);
      
      // Try to update in backend first
      try {
        const response = await axios.put(`${API_URL}/recipes/${updatedRecipe._id}`, updatedRecipe);
        console.log("Recipe updated in database:", response.data);
        
        // Update frontend state
        setRecipes(prevRecipes => 
          prevRecipes.map(recipe => 
            recipe._id === updatedRecipe._id ? response.data : recipe
          )
        );
      } catch (apiError) {
        console.error("Failed to update in database, updating locally:", apiError);
        // If backend fails, update locally
        setRecipes(prevRecipes => 
          prevRecipes.map(recipe => 
            recipe._id === updatedRecipe._id ? updatedRecipe : recipe
          )
        );
      }
      
      // Close the edit form
      setShowEditForm(false);
      setEditingRecipe(null);
      
    } catch (error) {
      console.error("Error updating recipe:", error);
      alert("Error updating recipe. Please try again.");
    }
  };

  const handleDeleteRecipe = async (recipeId) => {
    try {
      console.log("Deleting recipe:", recipeId);
      
      // Try to delete from backend first
      try {
        await axios.delete(`${API_URL}/recipes/${recipeId}`);
        console.log("Recipe deleted from database");
      } catch (apiError) {
        console.error("Failed to delete from database:", apiError);
        // Continue with frontend deletion even if backend fails
      }
      
      // Update frontend state
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe._id !== recipeId));
      
    } catch (error) {
      console.error("Error deleting recipe:", error);
      alert("Error deleting recipe. Please try again.");
    }
  };

  const handleEditRecipe = (recipe) => {
    setEditingRecipe(recipe);
    setShowEditForm(true);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (recipe.ingredients && recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

  if (loading) {
    return (
      <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#FFA500", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>Loading recipes...</div>
      </div>
    );
  }

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Group filtered recipes for display - responsive grouping
  const getGroupedRecipes = () => {
    if (isMobile) {
      // On mobile, show all recipes in a single column
      return [filteredRecipes];
    } else if (isTablet) {
      // On tablet, show 2 recipes per row
      const groups = [];
      for (let i = 0; i < filteredRecipes.length; i += 2) {
        groups.push(filteredRecipes.slice(i, i + 2));
      }
      return groups;
    } else {
      // On desktop, show 3 recipes per row with staggered layout
      const groups = [];
      for (let i = 0; i < filteredRecipes.length; i += 3) {
        groups.push(filteredRecipes.slice(i, i + 3));
      }
      return groups;
    }
  };

  const groupedRecipes = getGroupedRecipes();

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#FFA500" }}>
      <main style={{ padding: "20px", position: "relative" }}>
        
        {/* Search Bar and Add Recipe Button - Fully Responsive */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "stretch" : "center",
          marginBottom: "30px",
          gap: isMobile ? "15px" : "20px",
          padding: "0 10px",
        }}>
          
          {/* Left Section - Search */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: isMobile ? "10px" : "15px",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "100%" : "auto",
            position: isMobile ? "relative" : "static",
          }}>
            
            {/* Mobile Search Toggle Button */}
            {isMobile && !showMobileSearch && (
              <button
                onClick={() => setShowMobileSearch(true)}
                style={{
                  padding: "12px",
                  backgroundColor: "transparent",
                  border: "2px solid #FFA500",
                  borderRadius: "25px",
                  color: "#FFA500",
                  cursor: "pointer",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 165, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <span>🔍</span>
                <span>Search Recipes</span>
              </button>
            )}

            {/* Search Bar - Visible on desktop/tablet OR when mobile search is active */}
            {(!isMobile || showMobileSearch) && (
              <div style={{ 
                position: isMobile ? "fixed" : "relative",
                top: isMobile ? "0" : "auto",
                left: isMobile ? "0" : "auto",
                right: isMobile ? "0" : "auto",
                backgroundColor: isMobile ? "#000" : "transparent",
                padding: isMobile ? "15px" : "0",
                zIndex: isMobile ? 1000 : "auto",
                width: isMobile ? "100%" : (isTablet ? "280px" : "300px"),
                borderBottom: isMobile ? "2px solid #FFA500" : "none",
              }}>
                <div style={{ 
                  position: "relative", 
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                  {/* Search Input */}
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      padding: "12px 45px 12px 15px",
                      borderRadius: "25px",
                      border: "2px solid #FFA500",
                      backgroundColor: "#000",
                      color: "#FFA500",
                      width: "100%",
                      fontSize: isMobile ? "16px" : "16px",
                      outline: "none",
                      flex: 1,
                    }}
                    autoFocus={isMobile && showMobileSearch}
                  />
                  
                  {/* Search Icon */}
                  <span style={{
                    position: isMobile ? "absolute" : "absolute",
                    right: isMobile ? "60px" : "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#FFA500",
                    fontSize: "18px",
                  }}>
                    🔍
                  </span>

                  {/* Mobile Close Search Button */}
                  {isMobile && (
                    <button
                      onClick={() => {
                        setShowMobileSearch(false);
                        setSearchTerm("");
                      }}
                      style={{
                        background: "rgba(255, 0, 0, 0.8)",
                        border: "none",
                        borderRadius: "50%",
                        width: "35px",
                        height: "35px",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Search results info */}
                {searchTerm && (
                  <div style={{
                    fontSize: isMobile ? "13px" : "14px",
                    opacity: 0.7,
                    fontStyle: "italic",
                    textAlign: isMobile ? "center" : "left",
                    marginTop: isMobile ? "10px" : "5px",
                    padding: isMobile ? "0 10px" : "0",
                  }}>
                    Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
                    {filteredRecipes.length !== recipes.length && ` (of ${recipes.length} total)`}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Section - Status and Add Recipe Button */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: isMobile ? "10px" : "15px",
            justifyContent: isMobile ? "center" : "flex-end",
            width: isMobile ? "100%" : "auto",
            flexDirection: isMobile ? "column" : "row",
          }}>
            {/* Backend status */}
            {usingFallback && (
              <div style={{
                fontSize: isMobile ? "12px" : "14px",
                opacity: 0.7,
                fontStyle: "italic",
                textAlign: isMobile ? "center" : "left",
              }}>
                Using local recipes
              </div>
            )}
            
            {/* Add Recipe Button */}
            <button
              onClick={() => setShowForm(true)}
              style={{
                padding: isMobile ? "12px 20px" : "12px 24px",
                backgroundColor: "#FFA500",
                border: "none",
                color: "#000",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: isMobile ? "14px" : "16px",
                fontWeight: "bold",
                fontFamily: "'Playwrite US Modern', sans-serif",
                whiteSpace: "nowrap",
                width: isMobile ? "100%" : "auto",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ff8c00";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FFA500";
                e.target.style.transform = "translateY(0)";
              }}
            >
              + Add Recipe
            </button>
          </div>
        </div>

        {/* Page Title */}
        <h1
          style={{
            fontFamily: "'Playwrite US Modern', sans-serif",
            fontSize: isMobile ? "24px" : "32px",
            marginBottom: isMobile ? "40px" : "80px",
            textAlign: isMobile ? "center" : "right",
            padding: isMobile ? "0 20px" : "0 20px 0 0",
          }}
        >
          My Recipes ({filteredRecipes.length})
        </h1>
        
        {/* Recipe rows - Responsive staggered layout */}
        {filteredRecipes.length === 0 ? (
          <div style={{ textAlign: "center", padding: "50px" }}>
            {searchTerm ? (
              <div>
                <p style={{ fontSize: isMobile ? "16px" : "18px", marginBottom: "15px" }}>
                  No recipes found for "{searchTerm}"
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#FFA500",
                    border: "none",
                    color: "#000",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                    fontSize: isMobile ? "14px" : "16px",
                  }}
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <p style={{ fontSize: isMobile ? "16px" : "18px" }}>
                No recipes yet. Add your first recipe!
              </p>
            )}
          </div>
        ) : (
          <>
            {groupedRecipes.map((recipeGroup, groupIndex) => (
              <div
                key={groupIndex}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: isMobile ? "20px" : isTablet ? "40px" : "60px",
                  marginBottom: isMobile ? "60px" : "150px",
                  position: "relative",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "center" : "flex-start",
                }}
              >
                {recipeGroup.map((recipe, index) => (
                  <div
                    key={recipe._id}
                    style={{
                      marginTop: isMobile ? "0" : 
                                 groupIndex % 2 === 0 ? 
                                 `${index * 60}px` : 
                                 `${(recipeGroup.length - 1 - index) * 60}px`,
                    }}
                  >
                    <RecipeCard 
                      recipe={recipe} 
                      onRecipeClick={handleRecipeClick}
                      onDeleteRecipe={handleDeleteRecipe}
                      onEditRecipe={handleEditRecipe}
                    />
                  </div>
                ))}
              </div>
            ))}
          </>
        )}

        {/* Recipe addition form */}
        {showForm && (
          <RecipeForm 
            onAddRecipe={handleAddRecipe}
            onClose={() => setShowForm(false)}
          />
        )}

        {/* Recipe edit form */}
        {showEditForm && editingRecipe && (
          <EditRecipeForm 
            recipe={editingRecipe}
            onUpdateRecipe={handleUpdateRecipe}
            onClose={() => {
              setShowEditForm(false);
              setEditingRecipe(null);
            }}
          />
        )}

        {/* Recipe details */}
        {selectedRecipe && (
          <RecipeDetails 
            recipe={selectedRecipe}
            onClose={handleCloseDetails}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
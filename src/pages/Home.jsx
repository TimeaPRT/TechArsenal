import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";
import RecipeDetails from "../pages/RecipeDetails";

// Images from Unsplash that work reliably
const pizzaImg = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop";
const carbonaraImg = "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&h=200&fit=crop";
const tiramisuImg = "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop";
const lasagnaImg = "https://images.unsplash.com/photo-1619895092538-128341789043?w=300&h=200&fit=crop";
const risottoImg = "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&h=200&fit=crop";
const pannaCottaImg = "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop";
const bruschettaImg = "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop";
const minestroneImg = "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop";
const gelatoImg = "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Pizza Margherita",
      description: "A classic Italian recipe with mozzarella, tomatoes, and fresh basil.",
      image: pizzaImg,
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
      ]
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      description: "Creamy spaghetti with bacon, egg, and parmesan, very tasty.",
      image: carbonaraImg,
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
      ]
    },
    {
      id: 3,
      title: "Tiramisu",
      description: "Delicious Italian dessert with mascarpone, coffee, and cocoa.",
      image: tiramisuImg,
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
      ]
    },
    {
      id: 4,
      title: "Lasagna",
      description: "Delicious layers of pasta, meat, and béchamel sauce.",
      image: lasagnaImg,
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
      ]
    },
    {
      id: 5,
      title: "Mushroom Risotto",
      description: "Creamy risotto with fresh mushrooms and parmesan.",
      image: risottoImg,
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
      ]
    },
    {
      id: 6,
      title: "Panna Cotta",
      description: "Delicate Italian dessert with vanilla and fruit sauce.",
      image: pannaCottaImg,
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
      ]
    },
    {
      id: 7,
      title: "Bruschetta",
      description: "Toasted bread with tomatoes, garlic, and fresh basil.",
      image: bruschettaImg,
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
      ]
    },
    {
      id: 8,
      title: "Minestrone",
      description: "Dense Italian soup with vegetables and pasta.",
      image: minestroneImg,
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
      ]
    },
    {
      id: 9,
      title: "Gelato",
      description: "Creamy Italian ice cream with natural flavors.",
      image: gelatoImg,
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
      ]
    }
  ]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  const firstRowRecipes = recipes.slice(0, 3);
  const secondRowRecipes = recipes.slice(3, 6);
  const thirdRowRecipes = recipes.slice(6, 9);

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#FFA500" }}>
      <main style={{ padding: "20px", position: "relative" }}>
        {/* Button for adding recipe */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}>
          <div></div> {/* Spacer */}
          <button
            onClick={() => setShowForm(true)}
            style={{
              padding: "12px 24px",
              backgroundColor: "#FFA500",
              border: "none",
              color: "#000",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "'Playwrite US Modern', sans-serif",
            }}
          >
            + Add Recipe
          </button>
        </div>

        <h1
          style={{
            fontFamily: "'Playwrite US Modern', sans-serif",
            fontSize: "32px",
            marginBottom: "80px",
            textAlign: "right",
            paddingRight: "20px",
          }}
        >
          My Recipes
        </h1>
        
        {/* First row - first 3 recipes in / shape */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "60px",
          marginBottom: "150px",
          position: "relative",
        }}>
          {firstRowRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              style={{
                marginTop: `${index * 60}px`,
              }}
            >
              <RecipeCard recipe={recipe} onRecipeClick={handleRecipeClick} />
            </div>
          ))}
        </div>

        {/* Second row - next 3 recipes in \ shape */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "60px",
          marginBottom: "150px",
          position: "relative",
        }}>
          {secondRowRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              style={{
                marginTop: `${(secondRowRecipes.length - 1 - index) * 60}px`,
              }}
            >
              <RecipeCard recipe={recipe} onRecipeClick={handleRecipeClick} />
            </div>
          ))}
        </div>

        {/* Third row - next 3 recipes in / shape */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "60px",
          position: "relative",
        }}>
          {thirdRowRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              style={{
                marginTop: `${index * 60}px`,
              }}
            >
              <RecipeCard recipe={recipe} onRecipeClick={handleRecipeClick} />
            </div>
          ))}
        </div>

        {/* Recipe addition form */}
        {showForm && (
          <RecipeForm 
            onAddRecipe={handleAddRecipe}
            onClose={() => setShowForm(false)}
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
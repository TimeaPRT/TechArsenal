const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');
require('dotenv').config();

const sampleRecipes = [
  {
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

async function addSampleRecipes() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cookbook');
    console.log('✅ Connected to MongoDB');

    // Check if recipes already exist
    const existingCount = await Recipe.countDocuments();
    console.log(`📊 Found ${existingCount} existing recipes in database`);

    if (existingCount > 0) {
      console.log('🗑️  Clearing existing recipes...');
      await Recipe.deleteMany({});
      console.log('✅ Existing recipes cleared');
    }

    // Add sample recipes
    console.log('📝 Adding sample recipes...');
    const result = await Recipe.insertMany(sampleRecipes);
    console.log(`✅ Successfully added ${result.length} sample recipes to database!`);

    // Display added recipes
    console.log('\n📋 Added Recipes:');
    result.forEach(recipe => {
      console.log(`   - ${recipe.title} (${recipe.difficulty}, ${recipe.prepTime}, ${recipe.servings} servings)`);
    });

    console.log('\n🎉 Sample recipes setup complete!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error adding sample recipes:', error);
    process.exit(1);
  }
}

// Run the function
addSampleRecipes();
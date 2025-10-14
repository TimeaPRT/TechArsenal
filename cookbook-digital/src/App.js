import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import RecipeForm from './components/RecipeForm.jsx';
import About from './pages/About.jsx'; 
import Contact from './pages/Contact.jsx';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch recipes from backend when component mounts
    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/recipes');
            const data = await response.json();
            setRecipes(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setLoading(false);
        }
    };

    const handlePageChange = (pageName) => {
        setCurrentPage(pageName);
    };

    // Function to handle form submission and send data to backend
    const handleAddRecipe = async (recipeData) => {
        try {
            const response = await fetch('http://localhost:5000/api/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipeData),
            });

            if (response.ok) {
                const newRecipe = await response.json();
                
                // Refresh the recipes list to include the new one
                await fetchRecipes();
                
                // Go back to home page to see the new recipe
                setCurrentPage('home');
                
                alert('Recipe added successfully!');
            } else {
                alert('Failed to add recipe');
            }
        } catch (error) {
            console.error('Error adding recipe:', error);
            alert('Error adding recipe. Please try again.');
        }
    };

    const handleDeleteRecipe = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/recipes/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Refresh the recipes list after deletion
                await fetchRecipes();
                alert('Recipe deleted successfully!');
            } else {
                alert('Failed to delete recipe');
            }
        } catch (error) {
            console.error('Error deleting recipe:', error);
            alert('Error deleting recipe. Please try again.');
        }
    };

    const renderPage = () => {
        if (loading) {
            return <div className="text-center py-8">Loading recipes...</div>;
        }

        switch (currentPage) {
            case 'home':
                return <Home recipes={recipes} onDelete={handleDeleteRecipe} />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            case 'add':
                return <RecipeForm onSubmit={handleAddRecipe} />;
            default:
                return <Home recipes={recipes} onDelete={handleDeleteRecipe} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header onPageChange={handlePageChange} />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                {renderPage()}
            </main>
            
            <Footer onPageChange={handlePageChange} /> 
        </div>
    );
}

export default App;
import React, { useState } from 'react';

// Importă componentele UI și Pagina Home
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import RecipeDetails from './pages/RecipeDetails.jsx';
import RecipeForm from './components/RecipeForm.jsx';
import About from './pages/About.jsx'; 
import Contact from './pages/Contact.jsx';

// --- DATE MOCK (MINIME) ---
// Notă: Nu mai avem nevoie de router, dar păstrăm datele mock pentru a rula Home.
const initialMockRecipes = [
    { 
        _id: "1", 
        title: "Carbonara", 
        description: "Rețetă italiană rapidă.", 
        prepTime: "25 min",
        servings: 2,
        image: '/src/assets/carbonara.jpg'
    },
    { 
        _id: "2", 
        title: "Pizza", 
        description: "Pizza simplă.", 
        prepTime: "45 min",
        servings: 4,
        image: "/src/assets/pizza.avif"
    }
];
// --- END MOCK DATA ---


function App() {
    // 1. Starea care ține evidența paginii curente afișate
    const [currentPage, setCurrentPage] = useState('home');
    const [recipes, setRecipes] = useState(initialMockRecipes);

    // 2. Funcția pasată către Header și Footer pentru a schimba pagina
    const handlePageChange = (pageName) => {
        // Paginile tale: 'home', 'about', 'contact', 'add'
        setCurrentPage(pageName);
    };

    // Funcții placeholder (pentru a le pasa componentei Home)
    const handleDeleteRecipe = (id) => console.log("Placeholder: Șterge ID", id);
    const emptyFunction = () => {};


    // 3. Funcție care decide ce componentă să randeze
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                // Transmite datele mock către pagina Home
                return <Home recipes={recipes} onDelete={handleDeleteRecipe} />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            case 'add':
                // Transmite o funcție goală pentru a permite formularului să funcționeze
                return <RecipeForm onSubmit={emptyFunction} />;
            // Putem adăuga și 'details' sau 'edit' mai târziu, dar necesită și ID.
            default:
                return <Home recipes={recipes} onDelete={handleDeleteRecipe} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Pasați funcția de schimbare a paginii către Header */}
            <Header onPageChange={handlePageChange} />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                {/* Aici se randează componenta paginii curente */}
                {renderPage()}
            </main>
            
            {/* Pasați funcția de schimbare a paginii către Footer pentru ca link-urile să funcționeze */}
            <Footer onPageChange={handlePageChange} /> 
        </div>
    );
}

export default App;

// NOTĂ: Dacă folosești această abordare, nu mai ai nevoie de 'react-router-dom' în acest fișier.

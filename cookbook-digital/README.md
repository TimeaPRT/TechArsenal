# 🍳 CookBook Digital

A full-stack recipe management application built with React, Node.js, Express, and MongoDB.

![CookBook Digital](https://img.shields.io/badge/React-18.2.0-blue)
![CookBook Digital](https://img.shields.io/badge/Node.js-Express-green)
![CookBook Digital](https://img.shields.io/badge/MongoDB-Database-green)

## ✨ Features

- 📝 **Add New Recipes** - Create recipes with ingredients, instructions, and images
- 🔍 **Smart Search** - Search recipes by title, description, or ingredients
- ✏️ **Edit Recipes** - Update existing recipes with ease
- 🗑️ **Delete Recipes** - Remove recipes you no longer need
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 💾 **MongoDB Integration** - Persistent data storage
- 🎨 **Beautiful UI** - Custom orange/black theme with smooth animations

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Axios for API calls
- CSS3 with responsive design
- Modern React Hooks

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup
```bash
cd cookbook-backend
npm install

# Create .env file with:
# MONGODB_URI=mongodb://localhost:27017/cookbook
# PORT=5000

npm start
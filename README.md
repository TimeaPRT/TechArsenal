This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Overview
This is a Task Manager application built with **Next.js (TypeScript) frontend** and a **Node.js backend**.  
The app allows **anonymous users** to manage tasks. Tasks can be created, updated, deleted, and reordered via **drag-and-drop**.

---

## Frontend
- **Next.js** + **TypeScript** + **Tailwind CSS**
- Features:
  - View all tasks in a list
  - Add new tasks
  - Edit existing tasks
  - Delete tasks
  - **Drag and drop tasks** to reorder them
  - **Animated and reactive progress bar** showing task completion
  - **Task statistics** (TaskStats) reactive and animated
- State management: React hooks
- Styling: Tailwind CSS for responsive and modern design, fully compatible with multiple screen sizes

---

## Backend
- **Node.js** + **Express**
- Provides RESTful API endpoints:
  - `GET /tasks` – fetch all tasks
  - `POST /tasks` – create a new task
  - `PUT /tasks/:id` – update a task by ID
  - `DELETE /tasks/:id` – delete a task by ID
- Tasks stored in JSON file or in-memory (for development)
- CORS enabled for frontend requests

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/TimeaPRT/TechArsenal.git
 
   # Frontend
   cd frontend
   npm install
   npm run dev

   # Backend
   cd ../backend
   npm install
   npm run dev

import React, { useState } from 'react';
import AddNote from './AddNote';    
import NoteList from './NoteList'; 
import styles from './notes.module.css';

// AddNotes este componenta care implementează logica principală și gestionează starea notițelor
const AddNotes = () => {
  // Starea componentă care reține toate notițele. Nu folosim localStorage.
  const [notes, setNotes] = useState([]);

  // Funcție de callback pasată către AddNote.jsx pentru a adăuga o notiță.
  const handleAddNote = (newNote) => {
    // Adăugăm noua notiță la începutul listei (cele mai noi apar primele)
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  return (
    <div className={styles.appContainer}>
      <header className={styles.appHeader}>
        <h1>Aplicația Mea de Notițe </h1>
      </header>
      
      {/* 1. Secțiunea pentru adăugarea notițelor */}
      <section className={styles.addNoteSection}>
        <AddNote onAdd={handleAddNote} />
      </section>

      {/* 2. Secțiunea pentru afișarea notițelor */}
      <section className={styles.noteListSection}>
        <h2>Notițele Tale ({notes.length})</h2>
        <NoteList notes={notes} />
      </section>
    </div>
  );
};

export default AddNotes;
import React, { useState } from 'react';
// Importăm stilurile din notes.module.css, unde vom defini stilurile formularului
import styles from './notes.module.css';

// Template-ul de adăugare a notiței (AddNoteTemplate)
// Preia o funcție 'onAdd' ca prop pentru a trimite noua notiță către părinte
const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    if (!title.trim() && !content.trim()) {
      alert('Vă rugăm să introduceți un titlu sau un conținut pentru notiță.');
      return;
    }

  
    const newNote = {
      id: Date.now(), 
      title: title.trim(),
      content: content.trim(),
    };

    onAdd(newNote);

    // Resetăm câmpurile formularului după adăugare
    setTitle('');
    setContent('');
  };

  return (
    <div className={styles.addNoteContainer}>
      <h2 className={styles.addNoteTitle}>Adaugă o Notiță Nouă</h2>
      <form onSubmit={handleSubmit} className={styles.addNoteForm}>
        <input
          type="text"
          placeholder="Titlu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.addNoteInput}
        />
        <textarea
          placeholder="Ia o notiță..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.addNoteTextarea}
          rows="4"
        ></textarea>
        <button type="submit" className={styles.addButton}>
          Adaugă Notița
        </button>
      </form>
    </div>
  );
};

export default AddNote;
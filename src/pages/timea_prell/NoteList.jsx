import React from 'react';
import NoteCard from '../../components/NoteCard';
// Importăm stilurile din notes.module.css pentru layout-ul grid
import styles from './notes.module.css';

// Componenta care afișează lista de notițe
const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return <p className={styles.emptyMessage}>Nu există notițe. Adaugă prima ta notiță! 📝</p>;
  }

  return (
    <div className={styles.noteListGrid}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
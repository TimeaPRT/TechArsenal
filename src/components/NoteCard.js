import React from 'react';
import styles from './NoteCard.module.css';

// Componenta de afișare a unei singure notițe (Card)
const NoteCard = ({ note }) => {
  // note are structura: { id: number/string, title: string, content: string }
  return (
    <div className={styles.noteCard}>
      <h3 className={styles.noteTitle}>{note.title}</h3>
      <p className={styles.noteContent}>{note.content}</p>
    </div>
  );
};

export default NoteCard;
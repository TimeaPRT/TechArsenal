import React from "react";

function AddNote() {
  const handleSubmit = (e) => {
    // your code goes here
  };

  return (
    <form onSubmit={handleSubmit} className='add-note-form'>
      <input className='title-input' type='text' placeholder='Title' />
      <textarea className='content-input' placeholder='Content' />
      <button className='submit-button' type='submit'>
        Add Note
      </button>
    </form>
  );
}

export default AddNote;

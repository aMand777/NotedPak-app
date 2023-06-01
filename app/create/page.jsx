'use client';
import { useState } from 'react';
import CreateNote from '../components/templates/CreateNotes';
import { useNotes } from '../Context/notes-context';

const Create = () => {
  const { insertedNotes } = useNotes();
  const [note, setNote] = useState({
    title: '',
    body: '',
    tags: 'low',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });

    if (note.title.length === 19) {
      alert('Title maximum 20 characters');
    }
  };

  const handleSelect = (event) => {
    setNote({ ...note, tags: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!note.title) {
      alert('Title is required');
    } else if (!note.body) {
      alert('Note is required');
    } else {
      insertedNotes(note);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CreateNote handleChange={handleChange} handleSelect={handleSelect} />
      </form>
    </>
  );
};

export default Create;

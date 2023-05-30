'use client';
import { useState } from 'react';
import CreateNote from '../components/templates/CreateNotes';
import { useNotes } from '../Context/notes-context';

const Create = () => {
  const { insertedNotes } = useNotes();
  const [notes, setNotes] = useState({
    title: '',
    body: '',
    tags: 'low',
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNotes({ ...notes, [name]: value });
  };

  const handleSelect = (event) => {
    setNotes({ ...notes, tags: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!notes.title) {
      alert('Title is required');
    } else if (!notes.body) {
      alert('Note is required');
    } else {
      insertedNotes(notes);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <CreateNote handleChange={handleChange} handleSelect={handleSelect} />
      </form>
    </>
  );
};

export default Create;

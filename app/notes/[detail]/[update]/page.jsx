'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import UpdateNote from '../../../components/templates/UpdateNote';
import { useNotes } from '../../../Context/notes-context';

const NoteUpdate = ({ params }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get(`id`);

  const { updatedNotes } = useNotes();
  const notes = {
    title: searchParams.get('title') || '',
    body: searchParams.get('body') || '',
    tags: searchParams.get('tags') || '',
  };

  const [note, setNote] = useState(notes);

  const handleChange = (event) => {
    if (note.title.length === 19) {
      alert('Maximum 20 characters');
    }
    event.preventDefault();
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  const handleSelect = (event) => {
    setNote({ ...note, tags: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log('idParams :', params.update);
    event.preventDefault();
    if (!notes.title) {
      alert('Title is required');
    } else if (!notes.body) {
      alert('Note is required');
    } else {
      updatedNotes(note, id);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <UpdateNote title={note.title} body={note.body} tags={note.tags} handleChange={handleChange} handleSelect={handleSelect} />
      </form>
    </>
  );
};

export default NoteUpdate;

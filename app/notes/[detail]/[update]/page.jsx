'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import UpdateNote from '../../../components/templates/UpdateNote';
import { useNotes } from '../../../Context/notes-context';
import Alert from '../../../components/fragments/Alert'
import { useRouter } from 'next/navigation';

const NoteUpdate = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get(`id`);

  const { updatedNotes, alert, setAlert, message } = useNotes();
  const notes = {
    title: searchParams.get('title') || '',
    body: searchParams.get('body') || '',
    tags: searchParams.get('tags') || '',
  };

  const [note, setNote] = useState(notes);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  const handleSelect = (event) => {
    setNote({ ...note, tags: event.target.value });
  };

  const handleSubmit = (event) => {
    setAlert(true)
    event.preventDefault();
    if (!notes.title) {
      alert('Title is required');
    } else if (!notes.body) {
      alert('Note is required');
    } else {
      updatedNotes(note, id);
    }
  };

  const routes = () => {
    router.replace('/notes');
  }

  return (
    <>
      <Alert validation={alert} routes={routes} message={message} />
      <form onSubmit={handleSubmit}>
        <UpdateNote id={id} title={note.title} body={note.body} tags={note.tags} handleChange={handleChange} handleSelect={handleSelect} />
      </form>
    </>
  );
};

export default NoteUpdate;

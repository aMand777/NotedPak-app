'use client';
import { useState } from 'react';
import CreateNote from '../components/templates/CreateNotes';
import { useNotes } from '../Context/notes-context';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { validateTokenExp } from '../configs/validateUserLogin';
import Alert from '../components/fragments/Alert'

const Create = () => {
  // const [alertConfirm, setAlertConfirm] = useState('')
  const router = useRouter();
  const token = Cookies.get('token');
  if (validateTokenExp(token) === false) {
    router.replace('/login');
  }

  const { insertedNotes, alert, setAlert, message } = useNotes();
  const [note, setNote] = useState({
    title: '',
    body: '',
    tags: 'low',
  });

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
    if (!note.title) {
      alert('Title is required');
    } else if (!note.body) {
      alert('Note is required');
    } else {
      insertedNotes(note);
    }
  };

  const routes = () => {
    router.replace('/notes');
  }

  return (
    <>
      <Alert validation={alert} routes={routes} message={message} />
      <form onSubmit={handleSubmit}>
        <CreateNote handleChange={handleChange} handleSelect={handleSelect} />
      </form>
    </>
  );
};

export default Create;

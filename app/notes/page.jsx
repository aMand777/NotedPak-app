'use client';
import { useEffect } from 'react';
import NoteList from '../components/templates/NoteList';
import CreateIcon from '../components/fragments/CreateIcon';
import { useNotes } from '../Context/notes-context';
import NotesEmpty from '../components/templates/NotesEmpty';
import LoadingSpin from '../components/templates/LoadingSpin';

const NotesPage = () => {
  const { isLoading, getNotes, notes } = useNotes();


  useEffect(() => {
    getNotes();
  }, []);

  const totalData = notes.length;
  console.log('notes', notes);

  return (
    <>
      <LoadingSpin validation={isLoading} />
      <NotesEmpty validation={totalData === 0 && !isLoading} />
      {notes.map((note) => (
        <NoteList key={note._id} _id={note._id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} />
      ))}
      <CreateIcon />
    </>
  );
};

export default NotesPage;

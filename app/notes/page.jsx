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

  return (
    <>
      <LoadingSpin validation={isLoading} />
      <NotesEmpty validation={totalData === 0 && !isLoading} />
      <div className="w-10/12 mx-auto rounded-3xl flex flex-row flex-wrap md:justify-between justify-center mt-5">
        {notes.map((note) => (
          <NoteList key={note._id} _id={note._id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} />
        ))}
      </div>
      <CreateIcon />
    </>
  );
};

export default NotesPage;

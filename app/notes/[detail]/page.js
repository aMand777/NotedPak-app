'use client';

import Detail from '../../components/templates/Detail.js';
import { Context } from '../../../Context/notesContext';
import { useContext } from 'react';
import LoadingDetail from '../../components/templates/LoadingDetail.js';

const DetailNote = ({ params }) => {
  const id = params.detail;
  const { notes, deleteNote } = useContext(Context);
  const detailNote = notes.filter((note) => note._id === id);

  const deleted = () => {
    deleteNote(id);
  };

  return (
    <>
      <h1>Detail Note with ID {id}</h1>
      {detailNote.length > 0 ? (
        detailNote.map((note) => <Detail key={note._id} id={note._id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} onClick={deleted} />)
      ) : (
        <LoadingDetail />
      )}
    </>
  );
};

export default DetailNote;

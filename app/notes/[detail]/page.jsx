'use client';
import DetailNotes from '../../components/templates/DetailNotes';
import { useNotes } from '../../Context/notes-context.js';
import LoadingDetail from '../../components/templates/LoadingDetail.js';

const DetailNote = ({ params }) => {
  const id = params.detail;
  const { notes, deleteNote } = useNotes();
  const detailNote = notes.filter((note) => note._id === id);

  const deleted = () => {
    deleteNote(id);
  };

  return (
    <>
      {detailNote.length > 0 ? (
        detailNote.map((note) => <DetailNotes key={note._id} id={note._id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} onClick={deleted} />)
      ) : (
        <LoadingDetail />
      )}
    </>
  );
};

export default DetailNote;

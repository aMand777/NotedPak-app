'use client';
import DetailNotes from '../../components/templates/DetailNotes';
import { useNotes } from '../../Context/notes-context.js';
import LoadingDetail from '../../components/templates/LoadingDetail.js';
import Confirmation from '../../components/fragments/Confirmation'
import Alert from '../../components/fragments/Alert';
import { useRouter } from 'next/navigation';

const DetailNote = ({ params }) => {
  const router = useRouter();
  const id = params.detail;
  const { notes, deleteNote, confirmation, setConfirmation, alert, setAlert, message } = useNotes();
  const detailNote = notes.filter((note) => note._id === id);

  const deleted = () => {
    setConfirmation(true)
  };

  const confirm = () => {
    deleteNote(id);
    setAlert(true);
  }
  const routes = () => {
    router.replace('/notes')
  }

  return (
    <>
      <Confirmation validation={confirmation} confirm={confirm} message={'Are You Sure ?'} />
      <Alert validation={alert} routes={routes} message={message} />
      {detailNote.length > 0 ? (
        detailNote.map((note) => <DetailNotes key={note._id} id={note._id} title={note.title} body={note.body} tags={note.tags} createdAt={note.createdAt} updatedAt={note.updatedAt} onClick={deleted} />)
      ) : (
        <LoadingDetail />
      )}
    </>
  );
};

export default DetailNote;

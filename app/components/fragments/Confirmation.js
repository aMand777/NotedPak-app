import Button from '../elements/Button'
// import { useRouter } from 'next/navigation';
import { useNotes } from '../../Context/notes-context';

const Confirmation = ({ validation, confirm, message }) => {
  const { setConfirmation } = useNotes();
  // const router = useRouter();

  const yes = () => {
    confirm();
    setConfirmation(false)
  }

  const no = () => {
    setConfirmation(false)
  }

  return (
    <>
      <div className={`w-screen absolute items-center h-screen top-0 left-0 bg-black opacity-80 ${validation === true ? 'flex' : 'hidden'}`}></div>
      <div className={`w-screen absolute flex items-center h-screen top-0 left-0 scale-0  ${validation === true && 'scale-100 transition delay-1000'}`}>
        <div className='w-8/12 h-1/4 sm:w-4/12 bg-primary mx-auto rounded-3xl'>
          <div className='flex items-center justify-center h-4/5 w-full'>
          <p className="text-sm italic p-2 text-center font-semibold">{message}</p>
          </div>
          <div className='flex flex-row justify-around'>
            <Button onClick={no}>
              No
            </Button>
            <Button onClick={yes}>
              Yes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
import Button from '../elements/Button';
import { useRouter } from 'next/navigation';

const Detail = ({ id, title, body, tags, createdAt, updatedAt, onClick }) => {
  const router = useRouter();

  const create = new Date(createdAt).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const update = new Date(updatedAt).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  return (
    <>
      <div className="w-10/12 sm:w-7/12 md:w-5/12 h-fit my-5 mx-auto">
        <div className="sm:w-11/12 md:w-10/12 mx-auto h-fit">
          <div className="bg-secondary shadow rounded-t-md px-4 max-w-sm w-full mx-auto border border-primary border-b-0">
            <h3 className="font-bold text-xl text-center">{title}</h3>
            <p className="text-sm mx-1 italic break-words pb-10 pt-3">{body}</p>
          </div>
          <div className="bg-secondary rounded-b-md flex flex-row justify-between max-w-sm w-full mx-auto border border-primary border-t-0">
            <p className="text-xs italic pl-2">
              #<span className="text-sm self-center">{tags}</span>
            </p>
            <p className="text-xs text-slate-700 italic self-center pr-2">{createdAt === updatedAt ? `createdAt  ${create}` : `last_ updated ${update}`}</p>
          </div>
        </div>
        <div className="max-w-sm w-full mx-auto flex flex-row justify-between mt-3">
          <Button onClick={onClick}>Delete</Button>
          <Button onClick={() => router.replace(`/notes/update/&?id=${id}&title=${title}&body=${body}&tags=${tags}`)}>Update</Button>
        </div>
      </div>
    </>
  );
};

export default Detail;

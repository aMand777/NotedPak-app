import Link from 'next/link';

const NoteList = ({ _id, title, body, tags, createdAt, updatedAt }) => {
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
      <div className="mx-5 bg-secondary rounded-lg shadow-lg w-80 h-fit my-5 cursor-pointer hover:scale-105 ease-in-out delay-300">
        <Link href={`/notes/${_id}`}>
          <div className="p-1">
            <h3 className="font-bold text-xl mb-2 text-center">{title}</h3>
            <p className="text-sm break-words pb-5 px-3">{body}</p>
          </div>
          <div className="bg-secondary rounded-lg flex flex-row justify-between">
            <span className="text-base italic font-medium">
              #<span className="text-xs self-center">{tags}</span>
            </span>
            <span className="text-[11px] text-slate-700 italic font-medium self-center">{createdAt === updatedAt ? `createdAt  ${create}` : `updatedAt ${update}`}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NoteList;

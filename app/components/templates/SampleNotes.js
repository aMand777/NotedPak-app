const SampleNotes = ({ body, className }) => {
  const create = new Date().toLocaleString('id-ID', {
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
      <div className={`w-9/12 h-fit sm:w-1/3 sm:h-5/6 mx-auto bg-secondary rounded-lg my-auto mt-2 ${className}`}>
        <div className="p-1">
          <h3 className="font-bold text-sm mb-2 text-center italic">Catatan hari ini</h3>
          <p className="text-sm break-words italic p-1 text-center font-thin my-5">{body}</p>
        </div>
        <div className="bg-secondary rounded-lg flex flex-row justify-between">
          <span className="text-base italic font-medium">
            #<span className="text-xs self-center">urgent</span>
          </span>
          <span className="text-[11px] text-slate-700 italic font-medium self-center">{`createdAt ${create}`}</span>
        </div>
      </div>
    </>
  );
};

export default SampleNotes;

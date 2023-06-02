const ConfirmNoteStatus = ({errorMessage, className}) => {
  return (
    <>
      <div className={`w-full mx-auto bg-red-100 outline-red-300 outline-1 outline-double outline-offset-2 my-1 rounded-sm ${className}`}>
        <p className="text-xs italic text-center text-red-700">{errorMessage}</p>
      </div>
    </>
  );
};

export default ConfirmNoteStatus;

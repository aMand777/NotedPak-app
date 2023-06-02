'use client'
const InputLabel = ({ children, htmlFor, className, inputRef, errorMessage, ...rest }) => {

  return (
    <>
      <div className="mb-1">
        <label htmlFor={htmlFor} className="italic">
          <label />
          {children}
        </label>
      </div>
      <div>
        <input ref={inputRef} {...rest} className={`text-sm italic p-1 w-full focus:outline-primary border-red-500 rounded ${className}`} />
      </div>
      <div className='w-full mx-auto'>
      <p className="text-xs italic text-center text-red-700">{errorMessage}</p>
      </div>
    </>
  );
};
export default InputLabel;

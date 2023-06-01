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
        <input ref={inputRef} {...rest} className={`${className}`} />
      </div>
    </>
  );
};
export default InputLabel;

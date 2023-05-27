import React from 'react';

const Input = ({ children, htmlFor, className, ...rest }) => {
  return (
    <>
      {/* <div className={`${className} my-3 w-1/2 mx-auto`}> */}
      <div className="mb-1">
        <label htmlFor={htmlFor} className="italic">
          <label />
          {children}
        </label>
      </div>
      <div>
        <input {...rest} className={`${className}`} />
      </div>
      {/* </div> */}
    </>
  );
};
//className="bg-slate-100 text-sm italic p-1 rounded-sm w-full"
export default Input;

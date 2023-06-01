import React from 'react';

const ValidationError = ({errorMessage, className}) => {
  return (
    <>
      <div className={`w-full mx-auto bg-red-100 mt-1 rounded-sm ${className}`}>
        <p className="text-xs italic font-thin text-center text-red-700">{errorMessage}</p>
      </div>
    </>
  );
};

export default ValidationError;

import React from 'react';

export default function Button({ children, className, ...rest }) {
  return (
    <div className={`${className}`}>
      <button {...rest} type="submit" className="min-w-[50px] bg-sky-500 rounded-lg text-white text-xs font-semibold p-1 hover:bg-sky-600 shadow-lg">
        {children}
      </button>
    </div>
  );
}

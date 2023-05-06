import React from 'react';

export default function Button({ title, ...rest }) {
  return (
    <div>
      <button {...rest} className="min-w-[50px] bg-sky-500 rounded-lg text-white text-xs font-semibold p-1 hover:bg-sky-600 hover:border border-primary shadow-lg hover:scale-105">
        {title}
      </button>
    </div>
  );
}

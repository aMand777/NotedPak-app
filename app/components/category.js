import React from 'react';

const Category = ({ ...rest }) => {
  return (
    <div>
      <label htmlFor="tags" className="italic text-xs mr-1">
        Priority :
      </label>
      <select name="tags" id="tags" {...rest} className="rounded-lg bg-primary text-sm italic">
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
        <option value="urgent">urgent</option>
      </select>
    </div>
  );
};

export default Category;

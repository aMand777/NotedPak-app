'use client'
import React from 'react'

const Checkbox = ({ children, className, ...rest }) => {
    
  return (
      <div className={`${className}`}>
          <input type='checkbox'{...rest} />
          <label className='ml-2 text-sm italic'>{ children }</label>
    </div>
  )
}

export default Checkbox
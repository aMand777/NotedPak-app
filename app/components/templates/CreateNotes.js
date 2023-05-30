'use client'
import React from 'react';
import InputLabel from '../elements/InputLabel';
import TextArea from '../elements/TextArea';
import Category from '../templates/Category';
import Link from 'next/link';
import Button from '../elements/Button';
import { useEffect, useRef } from 'react';

const CreateNotes = ({ title, body, tags, handleChange, handleSelect }) => {
  const focusInput = useRef();

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <>
      <div className="sm:w-11/12 md:w-10/12 mx-auto">
        <div className="bg-secondary rounded-lg w-8/12 sm:w-7/12 md:w-5/12 h-fit my-5 shadow-2xl mx-auto">
          <div className="p-1 ">
            <p className="text-center border border-white rounded-lg">
              <InputLabel inputRef={focusInput} type="text" name="title" placeholder="title .." minLength={3} e maxLength={20} required value={title} onChange={handleChange} className="w-8/12 italic text-center bg-secondary focus:outline-none" />
            </p>
            <p className="text-sm my-3 mx-1 italic">
              <TextArea type="body" rows="5" id="body" name="body" required value={body} onChange={handleChange} placeholder="input your note here .." className="italic bg-secondary focus:outline-none w-full h-fit resize-none" />
            </p>
          </div>
          <div className="bg-secondary rounded-lg flex justify-between mx-auto flex-row w-full border border-white">
            <Category value={tags} onChange={handleSelect} />
            <p className="text-xs text-slate-700 italic self-center"></p>
          </div>
        </div>
        <div className="w-8/12 sm:w-7/12 md:w-5/12 mx-auto flex flex-row justify-between">
          <Link href="/notes">
            <Button>Back</Button>
          </Link>
          <Button>Save</Button>
        </div>
      </div>
    </>
  );
};

export default CreateNotes;

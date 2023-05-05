'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://notes-api.amandd.online/notes`)
      .then((response) => {
        setNotes(response.data.data.notes);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
      <Image src="/img/loading-spin01.png" alt="loading-icon" width={100} height={100} className="animate-spin duration-1000" />
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto rounded-3xl flex flex-row flex-wrap justify-around mt-5">
      {notes.map((note, index) => (
        <div key={index} className="mx-5 bg-secondary rounded-lg shadow-lg w-80 h-fit my-5 cursor-pointer hover:scale-105">
          <Link href={`/${note.id}`}>
            <div className="p-1">
              <h3 className="font-bold text-xl mb-2 text-center">{note.title}</h3>
              <p className="text-sm break-words">{note.body}</p>
            </div>
            <div className="bg-secondary rounded-lg flex flex-row justify-between">
              <span className="text-base italic font-medium">
                #<span className="text-xs self-center">{note.tags}</span>
              </span>
              <span className="text-[11px] text-slate-700 italic font-medium self-center">{note.createdAt === note.updatedAt ? note.createdAt : 'updated_at,' + ' ' + note.updatedAt}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NoteList;

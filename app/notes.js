'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/notes`)
      .then((response) => {
        setNotes(response.data.data.notes);
      })
      .catch((error) => console.log(error));
  }, []);

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

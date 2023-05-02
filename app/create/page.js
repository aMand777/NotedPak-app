'use client';
import React from 'react';
import Button from '../components/button';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Category from '../components/category';

const CreateNote = () => {
  const router = useRouter();
  const [notes, setNotes] = useState({
    title: '',
    body: '',
    tags: 'low',
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNotes({ ...notes, [name]: value });
  };

  const handleSelect = (event) => {
    setNotes({ ...notes, tags: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!notes.title) {
      alert('Title is required');
    } else if (!notes.body) {
      alert('Note is required');
    } else {
      axios
        .post(`https://notes-api.amandd.online/notes`, notes)
        .then((response) => {
          router.push('/');
          alert(response.data.message);
        })
        .catch((error) => alert(error.response.data.message));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="sm:w-11/12 md:w-10/12 mx-auto">
          <div className="bg-secondary rounded-lg w-8/12 sm:w-7/12 md:w-5/12 h-fit my-5 shadow-2xl mx-auto">
            <div className="p-1 ">
              <p className="text-center border border-white rounded-lg">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title .."
                  minLength={3}
                  maxLength={20}
                  value={notes.title}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  required
                  className="w-8/12 italic text-center bg-secondary focus:outline-none"
                />
              </p>
              <p className="text-sm my-3 mx-1 italic">
                <textarea
                  type="body"
                  rows="5"
                  id="body"
                  name="body"
                  value={notes.body}
                  onChange={handleChange}
                  required
                  placeholder="input your note here .."
                  className="italic bg-secondary focus:outline-none w-full h-fit resize-none"></textarea>
              </p>
            </div>
            <div className="bg-secondary rounded-lg flex justify-between mx-auto flex-row w-full border border-white">
              <Category value={notes.tags} onChange={handleSelect} />
              <p className="text-xs text-slate-700 italic self-center"></p>
            </div>
          </div>
          <div className="w-8/12 sm:w-7/12 md:w-5/12 mx-auto flex flex-row justify-between">
            <Link href="/">
              <Button title="Back" />
            </Link>
            <Button title="Save" type="submit" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;

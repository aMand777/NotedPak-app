'use client';
import React from 'react';
import Button from '../../components/button';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Category from '../../components/category';

const NoteUpdate = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get(`id`);
  const router = useRouter();

  const defaultValue = {
    title: searchParams.get('title') || '',
    body: searchParams.get('body') || '',
    tags: searchParams.get('tags') || '',
  };

  const [values, setValues] = useState(defaultValue);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      alert('Title is required');
    } else if (!body) {
      alert('Note is required');
    } else {
      axios
        .put(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, values)
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
    <>
      <form onSubmit={handleSubmit}>
        <div className="sm:w-11/12 md:w-10/12 mx-auto">
          <div className="bg-secondary rounded-lg w-8/12 sm:w-7/12 md:w-5/12 h-fit my-5 shadow-2xl mx-auto">
            <div className="p-1 ">
              <p className="text-center border border-white rounded-lg">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title .."
                  maxLength={20}
                  value={values.title}
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
                  value={values.body}
                  onChange={handleChange}
                  required
                  placeholder="input your note here .."
                  className="italic bg-secondary focus:outline-none w-full h-fit resize-none"></textarea>
              </p>
            </div>
            <div className="bg-secondary rounded-lg flex justify-between mx-auto flex-row w-full border border-white">
              <Category value={values.tags} onChange={handleChange} />
              <p className="text-xs text-slate-700 italic self-center"></p>
            </div>
          </div>
          <div className="w-8/12 sm:w-7/12 md:w-5/12 mx-auto flex flex-row justify-between">
            <Link href={`/${id}`}>
              <Button title="Back" />
            </Link>
            <Button title="Save" type="submit" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </>
  );
};

export default NoteUpdate;

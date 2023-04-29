'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/button';

const DetailNote = ({ params }) => {
  const id = params.detail;
  const router = useRouter();
  const [detailNote, setDetailNote] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/notes/${id}`)
      .then((response) => {
        setDetailNote(response.data.data.note);
      })
      .catch((error) => {
        alert(error.response.data.message);
        router.push('/');
      });
  }, [id]);

  const deleteNote = () => {
    const confirmation = confirm('Are you sure you want to delete this note?');
    if (confirmation) {
      axios.delete(`http://localhost:5000/notes/${id}`);
      router.push('/');
      alert('Deleted successfully');
    } else {
      null;
    }
  };

  return (
    <>
      {detailNote ? (
        <div className="sm:w-11/12 md:w-10/12 mx-auto">
          <div className="bg-secondary rounded-lg w-8/12 sm:w-7/12 md:w-5/12 h-fit my-5 shadow-2xl mx-auto">
            <div className="p-1">
              <h3 className="font-bold text-xl text-center">{detailNote.title}</h3>
              <p className="text-sm my-3 mx-1 italic break-words">{detailNote.body}</p>
            </div>
            <div className="bg-secondary rounded-lg flex flex-row justify-between">
              <p className="text-xs italic">
                #<span className="text-sm self-center">{detailNote.tags}</span>
              </p>
              <p className="text-xs text-slate-700 italic self-center">{detailNote.createdAt === detailNote.updatedAt ? detailNote.createdAt : 'last_updated,' + ' ' + detailNote.updatedAt}</p>
            </div>
          </div>
          <div className="w-8/12 sm:w-7/12 md:w-5/12 mx-auto flex flex-row justify-between">
            <Button title="Delete" onClick={deleteNote} />
            <Button title="Update" onClick={() => router.push(`/update/&?id=${id}&title=${detailNote.title}&body=${detailNote.body}&tags=${detailNote.tags}`)} />
          </div>
        </div>
      ) : (
        <div>Loading ..</div>
      )}
    </>
  );
};

export default DetailNote;

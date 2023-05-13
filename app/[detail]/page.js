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
      .get(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`)
      .then((response) => {
        setDetailNote(response.data.data.note);
      })
      .catch((error) => {
        alert(error.response.data.message);
        router.push('/notes');
      });
  }, [id]);

  const deleteNote = () => {
    const confirmation = confirm('Are you sure you want to delete this note?');
    if (confirmation) {
      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`);
      router.push('/');
      alert('Deleted successfully');
    } else {
      null;
    }
  };

  return (
    <>
      {detailNote ? (
        <div className="w-8/12 sm:w-7/12 md:w-5/12 h-fit my-5 mx-auto">
          <div className="sm:w-11/12 md:w-10/12 mx-auto h-fit">
            <div className="bg-secondary shadow rounded-t-md px-4 max-w-sm w-full mx-auto border border-primary border-b-0">
              <h3 className="font-bold text-xl text-center">{detailNote.title}</h3>
              <p className="text-sm mx-1 italic break-words pb-5">{detailNote.body}</p>
            </div>
            <div className="bg-secondary rounded-b-md flex flex-row justify-between max-w-sm w-full mx-auto border border-primary border-t-0">
              <p className="text-xs italic pl-2">
                #<span className="text-sm self-center">{detailNote.tags}</span>
              </p>
              <p className="text-xs text-slate-700 italic self-center pr-2">{detailNote.createdAt === detailNote.updatedAt ? detailNote.createdAt : 'last_updated,' + ' ' + detailNote.updatedAt}</p>
            </div>
          </div>
          <div className="max-w-sm w-full mx-auto flex flex-row justify-between mt-3">
            <Button title="Delete" onClick={deleteNote} />
            <Button title="Update" onClick={() => router.push(`/update/&?id=${id}&title=${detailNote.title}&body=${detailNote.body}&tags=${detailNote.tags}`)} />
          </div>
        </div>
      ) : (
        // Start Loading Page
        <div className="w-8/12 sm:w-7/12 md:w-5/12 h-fit my-5 mx-auto">
          <div className="sm:w-11/12 md:w-10/12 mx-auto">
            <div class=" bg-secondary border border-primary shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 w-1/2 bg-slate-500 rounded m-auto"></div>
                  <div class="h-2 bg-slate-500 rounded"></div>
                  <div class="h-2 bg-slate-500 rounded"></div>
                  <div class="h-2 bg-slate-500 rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-500 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-500 rounded col-span-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        // End of loading
      )}
    </>
  );
};

export default DetailNote;

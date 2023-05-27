import React from 'react';

const NotesEmpty = ({ validation }) => {
    if (validation) {
        return (
            <div className=" w-screen">
                <div className='w-9/12 sm:w-1/2 mx-auto rounded-lg bg-green-100 text-center mt-10'>
                    <h3 className="py-10 px-3 text-lg italic font-semibold">Catatan belum tersedia, silahkan buat catatan baru</h3>
                </div>
            </div>
        );
    }
};

export default NotesEmpty;

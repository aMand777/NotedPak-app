import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CreateIcon = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-row flex-wrap justify-end sticky bottom-3">
      <div className="cursor-pointer hover:scale-125">
        <Link href="/create">
          <Image src="/img/add-icon.png" alt="icon-add" width={25} height={25} className="hover:border hover:border-primary hover:rounded-lg" />
        </Link>
      </div>
    </div>
  );
};

export default CreateIcon;

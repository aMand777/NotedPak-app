import React from 'react';
import NoteList from './notes';
import AddIcon from '../app/components/add-icon';

const Home = () => {
  return (
    <>
      <NoteList />
      <AddIcon />
    </>
  );
};

export default Home;

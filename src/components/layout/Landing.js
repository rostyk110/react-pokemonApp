import React from 'react';
import Header from './Header';
import Filter from './Filter';
import Cards from '../cards/Cards';

export const Landing = () => {
  return (
    <>
      <Header />
      <Filter />
      <Cards />
    </>
  );
};

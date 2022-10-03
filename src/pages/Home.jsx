import React from 'react';
import ListNames from '../components/ListNames';
import PokeSearch from '../components/PokeSearch';

const Home = () => {
  return (
    <div>
      <PokeSearch />
      <ListNames />
    </div>
  );
};

export default Home;

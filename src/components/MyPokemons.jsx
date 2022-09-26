import React from 'react';

const MyPokemons = ({ pokeList }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <h2 style={{ textAlign: 'center', fontFamily: 'arial' }}>
          My Pokemons
        </h2>
        <ul style={{ listStyleType: 'none' }}>
          {pokeList?.map(({ name, img }) => {
            return (
              <li key={name}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <img src={img} />
                  <h2>{name}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyPokemons;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <>
      <div>
        <nav
          style={{
            backgroundColor: 'yellow',
            color: 'black',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 auto',
            padding: '0.5rem 1.5rem',
            maxWidth: '400px',
            fontFamily: 'arial',
          }}
        >
          <NavLink className='inactive' to='/' end>
            Search
          </NavLink>
          <NavLink className='inactive' to='/pokelist'>
            My Pokemons
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

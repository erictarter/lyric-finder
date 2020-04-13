import React from 'react';
import Search from '../tracks/Search';

const Navbar = () => {
  return (
    <div className='nav-style'>
      <span className='navbar-brand mb-0 h1 mx-auto'>Lyric Search</span>
      <Search />
    </div>
  );
};

export default Navbar;

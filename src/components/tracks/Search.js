import React, { useState, useEffect, useContext } from 'react';
import Context from '../../context';
import LoadContext from '../../contextLoad';
import Spinner from '../layout/Spinner';

const Search = () => {
  const [moreSongs, setMoreSongs] = useContext(LoadContext);
  const [moreSongData, setMoreSongData] = useState('');

  const [state, setState] = useContext(Context);
  const [fulldata, setfullData] = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchSongs = async () => {
    const res = await fetch(`https://api.lyrics.ovh/suggest/${searchTerm}`);
    const data = await res.json();
    const songData = data.data;

    setState(songData);
  };

  const fetchMoreSongs = async () => {
    const res = await fetch(`https://api.lyrics.ovh/suggest/${searchTerm}`);
    const data = await res.json();
    const songData = data;

    setMoreSongs(songData);
  };

  const onSubmit = e => {
    e.preventDefault();

    fetchSongs();
    fetchMoreSongs();
    setTimeout(() => {
      document.getElementById('search-term').value = '';
    }, 250);
    // console.log(state);
    // console.log(searchTerm);
  };

  return (
    <div>
      <form action='' onSubmit={onSubmit} id='form'>
        <input
          id='search-term'
          type='text'
          placeholder='search for artist or song'
          onChange={e => setSearchTerm(e.target.value)}
        />
        <input type='submit' value='Search' />
      </form>
    </div>
  );
};

export default Search;

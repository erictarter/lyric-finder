import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

const Lyrics = props => {
  const [track, setTrack] = useState('');
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState('');

  const getLyrics = async () => {
    const res = await fetch(
      `https://api.lyrics.ovh/v1/${props.match.params.trackArtist}/${props.match.params.trackTitle}`
    );
    const data = await res.json();

    let lyrics = data.lyrics;

    const newlyrics = lyrics.replace(/(\r\n|\r|\n)/g, <br />);

    console.log(newlyrics);

    setLyrics(lyrics);
    setArtist(props.match.params.trackArtist);
    setTrack(props.match.params.trackTitle);
  };

  useEffect(() => {
    getLyrics();
  }, [props.id]);

  if (lyrics === undefined) {
    return (
      <>
        <h1 className='text-center'>
          '{track}' <span className='space'>by</span>
          <span className='space'>{artist}</span>
        </h1>
        <p className='lead'>No Lyrics found for this song...</p>
        <Link to={`/`}>
          <button className='btn btn-secondary lyric-btn'>Go Back</button>
        </Link>
      </>
    );
  }
  if (track === '' && artist === '') {
    return <Spinner />;
  } else {
    return (
      <div>
        <h1 className='text-center'>
          '{track}' <span className='space'>by</span>
          <span className='space'>{artist}</span>
        </h1>

        <p className='lead mb-4 mt-4'>{lyrics}</p>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <button className='btn btn-secondary lyric-btn mx-auto mb-3'>
            Go Back
          </button>
        </Link>
      </div>
    );
  }
};

export default Lyrics;

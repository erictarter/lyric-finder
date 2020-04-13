import React, { useContext, useState } from 'react';
import { Context } from '../../context';
import { LoadContext } from '../../contextLoad';
import Spinner from '../layout/Spinner';
import { stat } from 'fs';
import Track from '../tracks/Track';
import Navbar from '../layout/Navbar';

export const Tracks = () => {
  const [state, setState] = useContext(Context);
  const [moreSongs, setMoreSongs] = useContext(LoadContext);

  const [loading, setLoading] = useState(false);
  const songIds = state.map(i => i.id);
  const songTitles = state.map(song => song.title);

  const loadMoreSongs = async url => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await res.json();

    console.log(data);
  };

  if (songTitles.length < 1) {
    return (
      <>
        <h1 className='text-center'>Search for Songs..</h1>
      </>
    );
  } else {
    return (
      <>
        <h1 className='text-center mb-4'></h1>
        <div className='row'>
          {state.map(song => (
            <Track
              key={song.id}
              trackTitle={song.title}
              trackArtist={song.artist.name}
            />
            // <h4>{song.title}</h4>
          ))}

          <button
            className='load-more
          btn btn-secondary mb-5'
            onClick={async () => {
              const res = await fetch(
                `https://cors-anywhere.herokuapp.com/${moreSongs.next}`
              );
              const result = await res.json();
              setState(result.data);
              setMoreSongs(result);

              console.log(result.data);
            }}
          >
            Load More
          </button>
        </div>
      </>
    );
  }
};

export default Tracks;

//   value => {
//     let trackList = value.track_list;
//     console.log(trackList);
//     trackList.map(i => console.log(i.artist.name, i.title));
//   };

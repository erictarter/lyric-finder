import React from 'react';
import { Link } from 'react-router-dom';

const Track = props => {
  const { trackTitle } = props;
  const { trackArtist } = props;

  return (
    <div className='col-md-4 col-sm-6 track-container'>
      <div className='card mb-4 shadow-md song-card'>
        <div className='card-body'>
          <h5>
            <i className='fas fa-music mr-2'></i>
            {trackTitle}
          </h5>
          <h5>
            <i className='fas fa-microphone-alt mr-2'></i>
            {trackArtist}
          </h5>
          <Link
            to={`/lyrics/${trackArtist}/${trackTitle}`}
            style={{ textDecoration: 'none' }}
          >
            <button className='btn btn-secondary lyric-btn'>See Lyrics</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;

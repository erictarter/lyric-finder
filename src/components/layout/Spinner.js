import React from 'react';
// import spinner from '../layout/spinner 2.gif';
import spinner from '../layout/spinner 2.gif';

export default () => {
  return (
    <div className='spinner'>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  );
};

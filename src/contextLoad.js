import React, { useState, useEffect } from 'react';

export const LoadContext = React.createContext();

export function LoadContextController({ children }) {
  const [songData, setSongData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    const fetchSongs = async () => {
      const res = await fetch(`https://api.lyrics.ovh/suggest/`);
      const data = await res.json();
      const songData = data;
      setSongData(data);
      //   console.log(songData.next);
    };

    fetchSongs();
  }, [id]);

  return (
    <>
      <LoadContext.Provider value={[songData, setSongData]}>
        {children}
      </LoadContext.Provider>
    </>
  );
}

export default LoadContext;

// const Consumer = Context.Consumer;
// export default Consumer;

// Add prevous button and be able to go through all songs
// format lyrics ----- ??

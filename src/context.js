import React, { useState, useEffect } from 'react';

export const Context = React.createContext();

export function ContextController({ children }) {
  const [trackList, setTrackList] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    const fetchSongs = async () => {
      const res = await fetch(`https://api.lyrics.ovh/suggest/`);
      const data = await res.json();
      const songData = data.data;

      setTrackList(songData);
    };

    fetchSongs();
  }, [id]);

  return (
    <>
      <Context.Provider value={[trackList, setTrackList]}>
        {children}
      </Context.Provider>
    </>
  );
}

export default Context;

// const Consumer = Context.Consumer;
// export default Consumer;

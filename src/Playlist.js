import React from "react";

import TrackList from "./Tracklist";

const Playlist = (props) => {

  return (
    <div>
      <TrackList 
        tracks= {props.playlistTracks}
        
      />
    </div>
  );

}

export default Playlist;
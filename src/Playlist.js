import React, { useCallback } from "react";

import "./Playlist.css";
import TrackList from "./Tracklist";

const Playlist = (props) => {

  const handleNameChange = useCallback((event) =>{
    props.onNameChange(event.target.value);
  },
  [props.onNameChange]
  );

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} /* value={props.playlistName} */ />
      <TrackList 
        tracks= {props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}       
      />
    </div>
  );

}

export default Playlist;
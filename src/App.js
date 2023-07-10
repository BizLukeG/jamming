import React, { useState, useCallback } from "react";

import './App.css';
/* import Track from './Track';
import SearchBar from './SearchBar';
import {tracks} from './Tracklist'; */

import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Spotify from "./Spotify";


const App = () => {
  const [searchResults, setSearchResults] = useState([
    {
      name: "First and Last",
      artist: 'Pete',
      album: 'Damn Pete',
      id: "1"
    },
    {
      name: "Lovely",
      artist: 'Simon',
      album: 'What da What',
      id: "2"
    },
    {
      name: "Smithy",
      artist: 'Dugo',
      album: 'Dugo Likes Deals',
      id: "3"
    }
  ]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
  {
    name: "First and Last",
    artist: 'Pete',
    album: 'Damn Pete',
    id: "1"
  },
  {
    name: "Lovely",
    artist: 'Simon',
    album: 'What da What',
    id: "2"
  },
  {
    name: "Smithy",
    artist: 'Dugo',
    album: 'Dugo Likes Deals',
    id: "3"
  }]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;
       
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },[playlistTracks]
  )

  //pass in track to be removed.SetPlaylistTracks takes old Tracks array runs filter on it and every track is checked
  //to see if it matches the track id to be removed. Returns an array that doesn't match the removed track as the new Playlist tracks
  //the useCallback caches the function so it doesn't call between rerenders, unless a dependency is changed
  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => 
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  },[]);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  })

  return (
    <div className="App">
      
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      
      
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
          />
        </div>
      </div>

        
      
    </div>
  );
}

export default App;

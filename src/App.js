import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
/* import Track from './Track';
import SearchBar from './SearchBar';
import {tracks} from './Tracklist'; */

import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
/* import SearchResults from "./SearchResults"; */


const App = () => {
  /* const [searchResults, setSearchResults] = useState([]); */
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

  return (
    <div className="App">
      
      <h1>
        Jammming
      </h1>
      
      
      <div className="App">
        <SearchBar />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          
        />
      </div>

        
      
    </div>
  );
}

export default App;

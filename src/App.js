import logo from './logo.svg';
import './App.css';
import Track from './Track';
import SearchBar from './SearchBar';
import {tracks} from './Tracklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Howdy Partner
        </p>
        {/* <Track /> */}
        <SearchBar />
        <div>
        {
          tracks.map(track => 
            <Track trackObject = {track} />
          )
        }
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

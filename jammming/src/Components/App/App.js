import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import Playlist from '../Playlist/Playlist.js';
import Track  from '../Track/Track.js';
import SearchResults from '../SearchResults/SearchResults.js';
import SearchBar from '../SearchBar/SearchBar.js';

import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [
      {name: '', artist: '', album: '', id: ''},
      {name: '', artist: '', album: '', id: ''},
      {name: '', artist: '', album: '', id: ''},
      {name: '', artist: '', album: '', id: ''},
    ]}
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
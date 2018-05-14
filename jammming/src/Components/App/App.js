import React from 'react';


//import TrackList from '../TrackList/TrackList.js';
import Playlist from '../Playlist/Playlist.js';
//import Track  from '../Track/Track.js';
import SearchResults from '../SearchResults/SearchResults.js';
import SearchBar from '../SearchBar/SearchBar.js';

import Spotify from '../../util/Spotify.js'

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: '', artist: '', album: '', id: ''},
        {name: '', artist: '', album: '', id: ''},
        {name: '', artist: '', album: '', id: ''},
        {name: '', artist: '', album: '', id: ''},
      ],
      playlistName: "Good Music",
      playlistTracks: [
        {name: '', artist: '', album: '', id: ''},
        {name: '', artist: '', album: '', id: ''},
        {name: '', artist: '', album: '', id: ''},
        {name: '', artist: '', album: '', id: ''},
      ],
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({playlistTracks: this.state.playlistTracks.push(track)});
    }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

/* var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
 */

  removeTrack(track) {
    /*go thru each object in the state and if the id property
     doesn't match up, allow it to be part of a new state array*/
    this.state.playlistTracks.filter(doneTrack => track.id !== doneTrack.id)
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.filter(track => track)
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search()}/>
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack()}
                           searchResults={this.state.searchResults}/>
            <Playlist name={this.state.playlistName}
                      tracks={this.state.playlistTracks}
                      onRemove={this.removeTrack()}
                      onNameChange={this.updatePlaylistName()}
                      onSave={this.savePlaylist()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

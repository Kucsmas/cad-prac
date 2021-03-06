import React from 'react';

//import Track  from '../Track/Track.js';
//import SearchResults from '../SearchResults/SearchResults.js';
//import SearchBar from '../SearchBar/SearchBar.js';
import TrackList from '../TrackList/TrackList.js';

import './Playlist.css';

class Playlist extends React.Component {
 constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }


  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }



  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange()}
               defaultValue={'New Playlist'}/>
        <TrackList name={this.props.name}
                   tracks={this.props.tracks}
                   onRemove={this.props.onRemove}
                   isRemoval={true}
                   onChange={this.handleNameChange()}/>
        <a className="Playlist-save"
           onClick={this.props.onSave} >
            SAVE TO SPOTIFY </a>
      </div>
    );
  }
}


export default Playlist;

import React from 'react';

//import TrackList from '../TrackList/TrackList.js';
//import Playlist from '../Playlist/Playlist.js';
//import SearchResults from '../SearchResults/SearchResults.js';
//import SearchBar from '../SearchBar/SearchBar.js';



let isRemoval = true;

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack=this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (isRemoval) {
      return <a className="Track-Action" onClick={this.removeTrack}> '-' </a>;
    } else {
      return <a className="Track-Action" onClick={this.addtrack}> '+' </a>;
    };
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track)
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>  /*name*/  </h3>
          <p> /*artist*/  | /*album*/ </p>
        </div>
        renderAction()
      </div>
    );
  }

}

 export default Track;

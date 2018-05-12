import React from 'react';

import Track from '../Track/Track.js';

import './TrackList.css'

class TrackList extends React.Component {

  /*renderTrack() {
    let tracks = this.props.tracks;
    return tracks.map(track => {
      return tracks.track;
    })
  }*/




  render() {

    let track = this.props.tracks.map(track => {
      return track;
    })
    return (
      <div className="TrackList">
       <Track track={track}/>

      </div>
    );
  }

}

export default TrackList;




/*
    line 11  <!-- You will add a map method that renders a set of Track components  -->
      */

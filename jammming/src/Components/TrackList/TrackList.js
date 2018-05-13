import React from 'react';

import Track from '../Track/Track.js';

import './TrackList.css'

class TrackList extends React.Component {

  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track track={track}
                          key={track.id}
                          onAdd={this.props.onAdd}
                          isRemoval={this.props.isRemoval}
                          onRemove={this.props.onRemove} />
          })
        }
      </div>
    );
  }
  
  
  
  /*renderTrack() {
    let tracks = this.props.tracks;
    return tracks.map(track => {
      return tracks.track;
    })
  }




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

} */

export default TrackList;




/*
    line 11  <!-- You will add a map method that renders a set of Track components  -->
      */

import React from 'react';

let isRemoval = true

class Track extends React.Component {
  renderAction() {
    if (isRemoval) {
      return '-';
    } else {
      return '+';
    };
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>  /*name*/  </h3>
          <p> /*artist*/  | /*album*/ </p>
        </div>
        <a className="Track-action">{this.renderAction}</a>
      </div>
    );
  }

}

 export default Track;

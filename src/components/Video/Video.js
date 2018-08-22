import React, { Component } from 'react';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Video">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default VideoList;

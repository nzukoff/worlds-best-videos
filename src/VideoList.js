import React, { Component } from 'react';
import Video from './Video';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="VideoList">
        {this.props.videos.map((video, i) => <Video key={i} title={video.title} />)}
      </div>
    );
  }
}

export default VideoList;

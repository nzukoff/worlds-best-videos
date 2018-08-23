import React, { Component } from 'react';
import Video from '../Video/Video';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="VideoList">
        {this.props.videos.map((video, i) => <Video key={i} index={i} title={video.title} onEditVideo={this.props.onEditVideo} />)}
      </div>
    );
  }
}

export default VideoList;

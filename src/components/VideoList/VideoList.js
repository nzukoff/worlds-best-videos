import React, { Component } from 'react';
import { connect } from 'react-redux'

import Video from '../Video/Video';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="VideoList">
        {this.props.videos.map((video, i) => <Video key={i} index={i} title={video.title} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {videos: state.videos}
}

export default connect(
  mapStateToProps
)(VideoList)

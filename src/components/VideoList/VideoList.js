import React from 'react';
import { connect } from 'react-redux'

import Video from '../Video/Video';

const VideoList = (props) => (
  <div className="VideoList">
    {props.videos.map((video, i) => <Video key={i} index={i} title={video.title} />)}
  </div>
)

const mapStateToProps = state => {
  return {videos: state.videos}
}

export default connect(
  mapStateToProps
)(VideoList)

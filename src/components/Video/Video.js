import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Video">
        <h3><a onClick={() => this.props.onEditVideo(this.props.index)}>{this.props.title}</a></h3>
      </div>
    );
  }
}

export default Video;

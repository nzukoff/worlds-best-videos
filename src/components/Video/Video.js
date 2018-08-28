import React, { Component } from 'react';
import { connect } from 'react-redux'

import { editVideo } from '../../actions/index'

class Video extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Video">
        <h3><a onClick={() => this.props.editVideo(this.props.index)}>{this.props.title}</a></h3>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editVideo: (index) => dispatch(editVideo(index))
})

export default connect(
  null,
  mapDispatchToProps
)(Video)
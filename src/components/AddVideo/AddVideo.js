import React, { Component } from 'react';
import { connect } from 'react-redux'

import { saveAddedVideo, updateTitle } from '../../actions/index'

class AddVideo extends Component {
  constructor(props) {
    super(props)
  }

  editTitle = (event) => {
    const target = event.target
    const field = target.name
    const value = target.value

    this.props.updateTitle(value)
  }

  render() {
    return (
      <div className="AddVideo">
        <form onSubmit={() => this.props.saveAddedVideo(this.props.updatedTitle)}>
          <input name='title' value={this.props.updatedTitle} onChange={this.editTitle} autoFocus />
          <button type='button' className="btn btn-secondary" onClick={() => this.props.saveAddedVideo(this.props.updatedTitle)}>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  updatedTitle: state.updatedTitle
})

const mapDispatchToProps = dispatch => ({
  updateTitle: (title) => dispatch(updateTitle(title)),
  saveAddedVideo: (title) => dispatch(saveAddedVideo(title))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVideo)

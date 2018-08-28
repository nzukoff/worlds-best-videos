import React, { Component } from 'react';
import { connect } from 'react-redux'

import { saveEditedVideo, deleteVideo, updateTitle } from '../../actions/index'

class EditVideo extends Component {
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
      <div className="EditVideo">
        <form onSubmit={() => this.props.saveEditedVideo(this.props.editingIndex, this.props.updatedTitle)}>
          <div className="container">
            <div className="row">
              <div className="col">
                <input name='title' value={this.props.updatedTitle} onChange={this.editTitle} autoFocus />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <button name='delete' type='button' className="btn btn-danger" onClick={() => this.props.deleteVideo(this.props.editingIndex)}>Delete</button>
              </div>
              <div className="col-2">
                <button name='enter' type='button' className="btn btn-secondary" onClick={() => this.props.saveEditedVideo(this.props.editingIndex, this.props.updatedTitle)}>Save</button>
              </div>
              <div className="col">
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.videos,
  editingIndex: state.editingIndex,
  updatedTitle: state.updatedTitle
})

const mapDispatchToProps = dispatch => ({
  updateTitle: (title) => dispatch(updateTitle(title)),
  saveEditedVideo: (index, title) => dispatch(saveEditedVideo(index, title)),
  deleteVideo: (index) => dispatch(deleteVideo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditVideo)

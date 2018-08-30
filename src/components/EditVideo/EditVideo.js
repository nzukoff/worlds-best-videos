import React from 'react';
import { connect } from 'react-redux'

import { saveEditedVideo, deleteVideo, updateTitle } from '../../actions/index'

const editTitle = (event, updateTitle) => {
  const target = event.target
  const value = target.value

  updateTitle(value)
}

const EditVideo = (props) => (
  <div className="EditVideo">
    <form onSubmit={() => props.saveEditedVideo(props.editingIndex, props.updatedTitle)}>
      <div className="container">
        <div className="row">
          <div className="col">
            <input name='title' value={props.updatedTitle} onChange={(e) => editTitle(e, props.updateTitle)} autoFocus />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button name='delete' type='button' className="btn btn-danger" onClick={() => props.deleteVideo(props.editingIndex)}>Delete</button>
          </div>
          <div className="col-2">
            <button name='enter' type='button' className="btn btn-secondary" onClick={() => props.saveEditedVideo(props.editingIndex, props.updatedTitle)}>Save</button>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    </form>
  </div>
)

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

import React from 'react';
import { connect } from 'react-redux'

import { saveAddedVideo, updateTitle } from '../../actions/index'

const editTitle = (event, updateTitle) => {
  const target = event.target
  const value = target.value

  updateTitle(value)
}

export const AddVideo = (props) => (
  <div className="AddVideo">
    <form onSubmit={() => props.saveAddedVideo(props.updatedTitle)}>
      <input name='title' value={props.updatedTitle} onChange={(e) => editTitle(e, props.updateTitle)} autoFocus />
      <button type='button' className="btn btn-secondary" onClick={() => props.saveAddedVideo(props.updatedTitle)}>Add</button>
    </form>
  </div>
)

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

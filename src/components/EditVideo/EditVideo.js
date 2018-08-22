import React, { Component } from 'react';

class EditVideo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="EditVideo">
        <form>
          {/* <input name='title' value={this.state.title} onChange={this.editTitle}/> */}
          <button onClick={() => this.props.onSaveEditedVideo(this.state)}>Save</button>
        </form>
      </div>
    );
  }
}

export default EditVideo;

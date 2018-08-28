import React, { Component } from 'react';

class EditVideo extends Component {
  constructor(props) {
    super(props)

    this.state = {title: this.props.videos[this.props.index]['title']}
  }

  editTitle = (event) => {
    const target = event.target
    const field = target.name
    const value = target.value

    this.setState({[field]: value})
  }

  render() {
    return (
      <div className="EditVideo">
        <form onSubmit={() => this.props.onSaveEditedVideo(this.props.index, this.state)}>
          <div className="container">
            <div className="row">
              <div className="col">
                <input name='title' value={this.state.title} onChange={this.editTitle} autoFocus />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <button name='delete' type='button' className="btn btn-danger" onClick={() => this.props.onDeleteVideo(this.props.index)}>Delete</button>
              </div>
              <div className="col-2">
                <button name='enter' type='button' className="btn btn-secondary" onClick={() => this.props.onSaveEditedVideo(this.props.index, this.state)}>Save</button>
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

export default EditVideo;

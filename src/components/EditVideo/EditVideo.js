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

  componentDidMount
  render() {
    return (
      <div className="EditVideo">
        <form>
          <input name='title' value={this.state.title} onChange={this.editTitle}/>
          <button name='delete' type='button' onClick={() => this.props.onDeleteVideo(this.props.index)}>Delete</button>
          <button name='enter' type='button' onClick={() => this.props.onSaveEditedVideo(this.props.index, this.state)}>Save</button>
        </form>
      </div>
    );
  }
}

export default EditVideo;

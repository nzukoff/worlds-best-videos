import React, { Component } from 'react';

class AddVideo extends Component {
  constructor(props) {
    super(props)

    this.state = {title: ''}
  }

  editTitle = (event) => {
    const target = event.target
    const field = target.name
    const value = target.value

    this.setState({[field]: value})
  }

  render() {
    return (
      <div className="AddVideo">
        <form>
          <input name='title' value={this.state.title} onChange={this.editTitle}/>
          <button onClick={() => this.props.onAdd(this.state)}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddVideo;

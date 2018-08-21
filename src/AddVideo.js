import React, { Component } from 'react';

class AddVideo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AddVideo">
        <form>
          <button onClick={this.props.onAdd}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddVideo;

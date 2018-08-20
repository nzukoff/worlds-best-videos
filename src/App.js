import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import VideoList from './VideoList'
import AddVideo from './AddVideo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 'video_list',
      videos: [
        { title: 'Star Wars' },
        { title: 'Star Trek II'}
      ]
    }
  }

  setAddVideoView = () => {
    this.setState({view: 'add_video'})
  }

  render() {
    let visible_content

    if (this.state.view ==='add_video') {
      visible_content =
        <div>
          <AddVideo />
        </div>
    } else {
      visible_content =
        <div>
          <button onClick={this.setAddVideoView}>Add Video</button>
          <VideoList videos={this.state.videos} />
        </div>
    }

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        {visible_content}
      </div>
    );
  }
}

export default App;

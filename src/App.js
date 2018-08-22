import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import VideoList from './components/VideoList/VideoList'
import AddVideo from './components/AddVideo/AddVideo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 'video_list',
      videos: [
        {title: 'Star Wars'},
        {title: 'Star Trek II'}
      ]
    }
  }

  onAdd = (newVideo) => {
    this.setState((prevState) => ({
                    videos: [...prevState.videos, newVideo],
                    view: 'video_list'
                  }))
  }

  setAddVideoView = () => {
    this.setState({view: 'add_video'})
  }

  render() {
    let visible_content

    if (this.state.view ==='add_video') {
      visible_content =
        <div>
          <AddVideo onAdd={this.onAdd}/>
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

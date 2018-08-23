import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import VideoList from './components/VideoList/VideoList'
import AddVideo from './components/AddVideo/AddVideo'
import EditVideo from './components/EditVideo/EditVideo'


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

  onAddVideo = () => {
    this.setState({view: 'add_video'})
  }

  onSaveAddedVideo = (newVideo) => {
    this.setState((prevState) => ({
                    videos: [...prevState.videos, newVideo],
                    view: 'video_list'
                  }))
  }

  onEditVideo = (index) => {
    this.setState({view: 'edit_video', editing_index: index})
  }

  onSaveEditedVideo = (index, newVideo) => {
    this.setState((prevState) => {
                    const newVideos = prevState.videos.slice(0)
                    newVideos[index] = newVideo
                    return({
                      videos: newVideos,
                      view: 'video_list'
                    })})
  }

  render() {
    let visible_content

    if (this.state.view ==='add_video') {
      visible_content =
        <div>
          <AddVideo onSaveAddedVideo={this.onSaveAddedVideo} />
        </div>
    } else if (this.state.view ==='video_list')  {
      visible_content =
        <div>
          <button onClick={this.onAddVideo}>Add Video</button>
          <VideoList onEditVideo={this.onEditVideo} videos={this.state.videos} />
        </div>
    } else if (this.state.view ==='edit_video') {
      visible_content =
      <div>
        <EditVideo index={this.state.editing_index} videos={this.state.videos} onSaveEditedVideo={this.onSaveEditedVideo} />
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

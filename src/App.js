import React, { Component } from 'react';
import { connect } from 'react-redux'
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
    if (newVideo.title !== '') {
      this.setState((prevState) => ({
                      videos: [...prevState.videos, newVideo],
                      view: 'video_list'
                    }))
    } else {
      this.props.setView('video_list')
    }
  }

  onEditVideo = (index) => {
    this.setState({view: 'edit_video', editing_index: index})
  }

  onSaveEditedVideo = (index, newVideo) => {
    if (newVideo.title !== '') {
      this.setState((prevState) => {
                      const newVideos = prevState.videos.slice(0)
                      newVideos[index] = newVideo
                      return({
                        videos: newVideos,
                        view: 'video_list'
                      })
                    })
    } else {
      this.setState({view: 'video_list'})
    }
  }

  onDeleteVideo = (index) => {
    this.setState((prevState) => {
                    const newVideos = prevState.videos.slice(0)
                    newVideos.splice(index, 1)
                    return({
                      videos: newVideos,
                      view: 'video_list'
                    })})
  }

  render() {
    let visible_content

    if (this.state.view ==='add_video') {
      visible_content =
        <div className="row">
          <div className="col">
            <AddVideo onSaveAddedVideo={this.onSaveAddedVideo} />
          </div>
        </div>
    } else if (this.state.view ==='edit_video') {
      visible_content =
        <div className="row">
          <div className="col">
            <EditVideo index={this.state.editing_index} videos={this.state.videos} onDeleteVideo={this.onDeleteVideo} onSaveEditedVideo={this.onSaveEditedVideo} />
          </div>
        </div>
    } else if (this.state.view ==='video_list') {
      visible_content =
        <div className="row">
          <div className="col">
            <VideoList onEditVideo={this.onEditVideo} videos={this.state.videos} />
          </div>
          <div className="col">
            <button type='button' className="btn btn-secondary" onClick={this.onAddVideo}>Add Video</button>
          </div>
        </div>
    }

    return(
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} className="logo" alt="logo" />
            </div>
          </div>
        </div>
        <div className="container">
          {visible_content}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (view: state)

const mapDispatchToProps = dispatch => ({
  setView: (view) => dispatch({type: 'SET_VIEW', view})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

//export default App;

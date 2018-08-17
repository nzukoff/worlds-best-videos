import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import VideoList from './VideoList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [
        { title: 'Star Wars' },
        { title: 'Star Trek II'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

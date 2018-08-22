import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import VideoList from './components/VideoList/VideoList';
import AddVideo from './components/AddVideo/AddVideo';
import EditVideo from './components/EditVideo/EditVideo';

import { shallow } from 'enzyme';

it('displays a logo on start', () => {
  const appWrapper = shallow(<App />);
  const logo = appWrapper.find('.logo');
  expect(logo).toHaveLength(1);
});

it('displays a video list', () => {
  const appWrapper = shallow(<App />);
  const videoList = appWrapper.find(VideoList);
  expect(videoList).toHaveLength(1);
});

it('has state', () => {
  const appWrapper = shallow(<App />);
  expect(appWrapper.state().videos).toHaveLength(2);
});

it('passes videos state', () => {
  const appWrapper = shallow(<App />);
  const videoList = appWrapper.find(VideoList);
  expect(videoList.props().videos).toHaveLength(2);
});

it('displays an "Add Video" button', () => {
  const appWrapper = shallow(<App />);
  const addVideoButton = appWrapper.find('button');
  expect(addVideoButton).toHaveLength(1);
  expect(addVideoButton.text()).toBe('Add Video')
});

it('clicking "Add Video" button takes the user to an add video page', () => {
  const appWrapper = shallow(<App />);
  let addVideoButton = appWrapper.find('button');
  addVideoButton.simulate('click')
  const addVideo = appWrapper.find(AddVideo);
  expect(addVideo).toHaveLength(1);
  const videoList = appWrapper.find(VideoList);
  expect(videoList).toHaveLength(0);
  addVideoButton = appWrapper.find('button');
  expect(addVideoButton).toHaveLength(0);
});

it('clicking "Add" button from the add video page takes the user to the video list page', () => {
  const appWrapper = shallow(<App />);
  let addVideoButton = appWrapper.find('button');
  addVideoButton.simulate('click')
  expect(appWrapper.state().view).toEqual('add_video')
  appWrapper.instance().onSaveAddedVideo();
  expect(appWrapper.state().view).toEqual('video_list')
  const videoList = appWrapper.find(VideoList);
  expect(videoList).toHaveLength(1);
  const addVideo = appWrapper.find(AddVideo);
  expect(addVideo).toHaveLength(0);
});

it('onSaveAddedVideo is passed from App to AddVideo correctly', () => {
  const appWrapper = shallow(<App />);
  appWrapper.setState({view: 'add_video'})
  const addVideo = appWrapper.find(AddVideo)
  expect(addVideo.props().onSaveAddedVideo).toEqual(appWrapper.instance().onSaveAddedVideo);
})

it('shows a video in the video list when one is added', () => {
  // Setup
  const appWrapper = shallow(<App />)
  const expected = {title: 'Brazil'}
  const videoList = appWrapper.find(VideoList)

  // Exercise
  appWrapper.instance().onSaveAddedVideo(expected)

  // Assert
  expect(appWrapper.state().videos).toContainEqual(expected)
})

it('clicking a video title from the video list page takes the user to the edit video page', () => {
  // Setup
  const appWrapper = shallow(<App />)


  //Exercise
  appWrapper.instance().onEditVideo()
  const editVideo = appWrapper.find(EditVideo)
  const videoList = appWrapper.find(VideoList)
  const addVideo = appWrapper.find(AddVideo)

  //Assert
  expect(appWrapper.state().view).toEqual('edit_video')
  expect(editVideo).toHaveLength(1)
  expect(videoList).toHaveLength(0)
  expect(addVideo).toHaveLength(0)
});

it('onEditVideo is passed from App to VideoList correctly', () => {
  const appWrapper = shallow(<App />);
  const videoList = appWrapper.find(VideoList)
  expect(videoList.props().onEditVideo).toEqual(appWrapper.instance().onEditVideo);
})
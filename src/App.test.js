import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import VideoList from './VideoList';
import AddVideo from './AddVideo';

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

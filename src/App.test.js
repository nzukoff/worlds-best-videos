import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VideoList from './VideoList';
import { shallow } from 'enzyme';

it('displays a logo on start', () => {
  const appWrapper = shallow(<App />);
  const logo = appWrapper.find('.logo');
  expect(logo).toHaveLength(1);
});

it('displays a video list', () => {
  const appWrapper = shallow(<App />);
  const videoLists = appWrapper.find(VideoList);
  expect(videoLists).toHaveLength(1);
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

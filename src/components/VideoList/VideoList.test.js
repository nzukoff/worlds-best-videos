import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './VideoList';
import Video from '../Video/Video';
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('displays a list of video titles', () => {
  const videoData = [{title: 'Star Wars'}, {title: 'Star Trek II'}];
  const videoListWrapper = shallow(<VideoList videos={videoData} />);
  const videos = videoListWrapper.find(Video);
  expect(videos).toHaveLength(2);
});

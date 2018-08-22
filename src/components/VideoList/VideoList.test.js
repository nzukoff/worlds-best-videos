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

it('onEditVideo is passed from VideoList to Video correctly', () => {
  const videoData = [{title: 'Star Wars'}, {title: 'Star Trek II'}];
  const onEditVideo = sinon.stub()
  const videoListWrapper = shallow(<VideoList videos={videoData} onEditVideo={onEditVideo} />);
  const video = videoListWrapper.find(Video)
  expect(video.first().props().onEditVideo).toEqual(videoListWrapper.instance().props.onEditVideo);
})

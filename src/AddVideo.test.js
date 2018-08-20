import React from 'react';
import ReactDOM from 'react-dom';
import AddVideo from './AddVideo';
import Video from './Video';
import { shallow } from 'enzyme';

it('creates a means to add a new video', () => {
  const addVideoWrapper = shallow(<AddVideo />);
});

// it('contains an "Add" button', () => {
//   const addVideoWrapper = shallow(<AddVideo />);
//   let addButton = appWrapper.find('input');
//   addButton.simulate('click')
//   const addVideo = appWrapper.find(AddVideo);
//   expect(addVideo).toHaveLength(0);
//   const videoList = appWrapper.find(VideoList);
//   expect(videoList).toHaveLength(1);
//   addVideoButton = appWrapper.find('button');
//   expect(addVideoButton).toHaveLength(1);
// }):

import React from 'react';
import ReactDOM from 'react-dom';
import Video from './Video';
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('displays video title', () => {
  const title = 'Star Wars';
  const videoListWrapper = shallow(<Video title={title} />);
  const displayedTitle = videoListWrapper.find('h3');
  expect(displayedTitle).toHaveLength(1);
  expect(displayedTitle.text()).toBe('Star Wars')
});

it('has clickable video titles', () => {
  const title = 'Star Wars';
  const videoListWrapper = shallow(<Video title={title} />);
  const titleLink = videoListWrapper.find('a');
  expect(titleLink).toHaveLength(1);
  expect(titleLink.text()).toBe('Star Wars')
});

it('has instance of onEditVideo callback', () => {
  // Setup
  const onEditVideo = sinon.stub()
  const videoWrapper = shallow(<Video onEditVideo={onEditVideo} />)
  const videoTitleLink = videoWrapper.find('a')

  // Exercise
  videoTitleLink.simulate('click')

  // Assert
  expect(onEditVideo.calledOnce).toBe(true)
})
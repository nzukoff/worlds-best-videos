import React from 'react';
import ReactDOM from 'react-dom';
import Video from './Video';
import { shallow } from 'enzyme';

it('displays video title', () => {
  const title = 'Star Wars';
  const videoListWrapper = shallow(<Video title={title} />);
  const displayedTitle = videoListWrapper.find('h3');
  expect(displayedTitle).toHaveLength(1);
  expect(displayedTitle.text()).toBe('Star Wars')
});

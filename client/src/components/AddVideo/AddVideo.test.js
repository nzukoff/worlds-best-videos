import React from 'react';
import ReactDOM from 'react-dom';
import { AddVideo } from './AddVideo';
import Video from '../Video/Video';
import App from '../../App'
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('creates a means to add a new video', () => {
  const addVideoWrapper = shallow(<AddVideo />)
})

it('contains an "Add" button that calls the action creator', () => {
  // Setup
  const saveAddedVideo = sinon.stub()
  const updatedTitle = 'Jaws'
  const addVideoWrapper = shallow(<AddVideo saveAddedVideo={saveAddedVideo} updatedTitle={updatedTitle} />);
  const addButton = addVideoWrapper.find('button')

  // Exercise
  addButton.simulate('click')

  // Assert
  expect(addButton).toHaveLength(1)
  expect(saveAddedVideo.calledOnce).toBe(true)
  expect(saveAddedVideo.calledWith('Jaws')).toBe(true)
})

it('calls the action creator when the title field changes', () => {
  // Setup
  const updateTitle = sinon.stub()
  const event = {target: {name: 'title', value: 'Brazil'}}
  const addVideoWrapper = shallow(<AddVideo updateTitle={updateTitle} />);

  // Exercise
  addVideoWrapper.find({name: 'title'}).simulate('change', event)

  // Assert
  expect(updateTitle.calledOnce).toBe(true)
  expect(updateTitle.calledWith('Brazil')).toBe(true)
})

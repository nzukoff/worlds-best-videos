import React from 'react';
import ReactDOM from 'react-dom';
import AddVideo from './AddVideo';
import Video from '../Video/Video';
import App from '../../App'
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('creates a means to add a new video', () => {
  const addVideoWrapper = shallow(<AddVideo />)
})

it('contains an "Add" button that calls a handler', () => {
  const onSaveAddedVideo = sinon.stub()
  const addVideoWrapper = shallow(<AddVideo onSaveAddedVideo={onSaveAddedVideo} />)
  const addButton = addVideoWrapper.find('form').find('button')
  expect(addButton).toHaveLength(1)
  addButton.simulate('click')
  expect(onSaveAddedVideo.calledOnce).toBe(true)
})

it('creates a video when "Add" clicked', () => {
  // Setup
  const onSaveAddedVideo = sinon.stub()
  const addVideoWrapper = shallow(<AddVideo onSaveAddedVideo={onSaveAddedVideo} />)
  addVideoWrapper.setState({title: "A Few Good Men"})
  const addButton = addVideoWrapper.find('form').find('button')
  expect(addButton).toHaveLength(1)
  addButton.simulate('click')
  expect(onSaveAddedVideo.calledOnce).toBe(true)
  expect(onSaveAddedVideo.calledWith({title: 'A Few Good Men'})).toBe(true);
})

it('sets title in form correctly', () => {
  // Setup
  const addVideoWrapper = shallow(<AddVideo />)
  const event = {target: {name: 'title', value: 'Brazil'}}

  //Exercise
  addVideoWrapper.find({name: 'title'}).simulate('change', event)

  //Assert
  expect(addVideoWrapper.find({value: 'Brazil'})).toHaveLength(1)
})

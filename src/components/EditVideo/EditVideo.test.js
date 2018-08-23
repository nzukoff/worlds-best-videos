import React from 'react';
import ReactDOM from 'react-dom';
import EditVideo from './EditVideo';
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('creates a means to edit a video', () => {
    const editVideoWrapper = shallow(<EditVideo index={0} videos={[{title: 'Jaws II'}]} />)
})

it('contains a "Save" button that calls a handler', () => {
  const onSaveEditedVideo = sinon.stub()
  const editVideoWrapper = shallow(<EditVideo index={0} videos={[{title: 'Jaws II'}]} onSaveEditedVideo={onSaveEditedVideo} />)
  const saveButton = editVideoWrapper.find('form').find('button')
  expect(saveButton).toHaveLength(1)
  saveButton.simulate('click')
  expect(onSaveEditedVideo.calledOnce).toBe(true)
})

it('accepts a default title', () => {
  const onSaveEditedVideo = sinon.stub()
  const videos = [{title: 'Poltergeist'}, {title: 'Jaws'}]
  const editVideoWrapper = shallow(<EditVideo index={1} videos={videos} onSaveEditedVideo={onSaveEditedVideo} />)
  expect(editVideoWrapper.find({value: 'Jaws'})).toHaveLength(1)
})

it('saves video when "Save" clicked', () => {
  const onSaveEditedVideo = sinon.stub()
  const editVideoWrapper = shallow(<EditVideo index={1} videos={[{title: 'Jaws II'}, {title: 'A Few Good Men'}]} onSaveEditedVideo={onSaveEditedVideo} />)
  const saveButton = editVideoWrapper.find('form').find('button')
  expect(saveButton).toHaveLength(1)
  saveButton.simulate('click')
  expect(onSaveEditedVideo.calledOnce).toBe(true)
  expect(onSaveEditedVideo.calledWith(1, {title: 'A Few Good Men'})).toBe(true);
})

it('sets title in form correctly', () => {
  // Setup
  const editVideoWrapper = shallow(<EditVideo index={0} videos={[{title: 'Jaws II'}]} />)
  const event = {target: {name: 'title', value: 'Brazil'}}

  //Exercise
  editVideoWrapper.find({name: 'title'}).simulate('change', event)

  //Assert
  expect(editVideoWrapper.find({value: 'Brazil'})).toHaveLength(1)
})

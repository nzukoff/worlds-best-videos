import React from 'react';
import ReactDOM from 'react-dom';
import { EditVideo } from './EditVideo';
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('creates a means to edit a video', () => {
    const editVideoWrapper = shallow(<EditVideo />)
})

it('contains a "Save" button that calls the action creator', () => {
  // Setup
  const saveEditedVideo = sinon.stub()
  const updatedTitle = 'Jaws'
  const editVideoWrapper = shallow(<EditVideo saveEditedVideo={saveEditedVideo} updatedTitle={updatedTitle} editingIndex={1}/>);
  const saveButton = editVideoWrapper.find('button').find({name: 'enter'})

  // Exercise
  saveButton.simulate('click')

  // Assert
  expect(saveButton).toHaveLength(1)
  expect(saveEditedVideo.calledOnce).toBe(true)
  expect(saveEditedVideo.calledWith(1, 'Jaws')).toBe(true)
})

it('accepts a default title', () => {
  // Setup
  const updatedTitle = 'Jaws'
  const editVideoWrapper = shallow(<EditVideo editingIndex={1} updatedTitle={updatedTitle} />)

  // Assert
  expect(editVideoWrapper.find({value: 'Jaws'})).toHaveLength(1)
})

it('calls the action creator when the title field changes', () => {
  // Setup
  const updateTitle = sinon.stub()
  const event = {target: {name: 'title', value: 'Brazil'}}
  const editVideoWrapper = shallow(<EditVideo updateTitle={updateTitle} />);

  // Exercise
  editVideoWrapper.find({name: 'title'}).simulate('change', event)

  // Assert
  expect(updateTitle.calledOnce).toBe(true)
  expect(updateTitle.calledWith('Brazil')).toBe(true)
})

it('displays a delete button', () => {
  // Setup
  const editVideoWrapper = shallow(<EditVideo />)
  const deleteButton = editVideoWrapper.find('form').find({name: 'delete'})

  // Assert
  expect(deleteButton).toHaveLength(1)
})

it('contains a "Delete" button that calls the action creator', () => {
  // Setup
  const deleteVideo = sinon.stub()
  const editVideoWrapper = shallow(<EditVideo editingIndex={1} deleteVideo={deleteVideo} />);
  const deleteButton = editVideoWrapper.find('button').find({name: 'delete'})

  // Exercise
  deleteButton.simulate('click')

  // Assert
  expect(deleteButton).toHaveLength(1)
  expect(deleteVideo.calledOnce).toBe(true)
  expect(deleteVideo.calledWith(1)).toBe(true)
})

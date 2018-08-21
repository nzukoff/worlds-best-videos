import React from 'react';
import ReactDOM from 'react-dom';
import AddVideo from './AddVideo';
import Video from './Video';
import App from './App'
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('creates a means to add a new video', () => {
  const addVideoWrapper = shallow(<AddVideo />)
})

it('contains an "Add" button', () => {
  const onAdd = sinon.stub()
  const addVideoWrapper = shallow(<AddVideo onAdd={onAdd} />)
  const addButton = addVideoWrapper.find('form').find('button')
  expect(addButton).toHaveLength(1)
  addButton.simulate('click')
  expect(onAdd.calledOnce).toBe(true)
})

it('creates a video when "Add" clicked', () => {
  // Setup
  const onAdd = sinon.stub()
  const addVideoWrapper = shallow(<AddVideo onAdd={onAdd} />)
  addVideoWrapper.setState({title: "A Few Good Men"})
  const addButton = addVideoWrapper.find('form').find('button')
  expect(addButton).toHaveLength(1)
  addButton.simulate('click')
  expect(onAdd.calledOnce).toBe(true)
  expect(onAdd.calledWith({title: 'A Few Good Men'})).toBe(true);
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

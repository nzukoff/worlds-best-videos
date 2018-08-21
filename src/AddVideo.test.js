import React from 'react';
import ReactDOM from 'react-dom';
import AddVideo from './AddVideo';
import Video from './Video';
import App from './App'
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('creates a means to add a new video', () => {
  const addVideoWrapper = shallow(<AddVideo />);
});

it('contains an "Add" button', () => {
  const onAdd = sinon.stub();
  const addVideoWrapper = shallow(<AddVideo onAdd={onAdd}/>);
  const addButton = addVideoWrapper.find('form').find('button');
  expect(addButton).toHaveLength(1);
  addButton.simulate('click')
  expect(onAdd.calledOnce).toBe(true);

});



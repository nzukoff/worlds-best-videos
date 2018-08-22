import React from 'react';
import ReactDOM from 'react-dom';
import EditVideo from './EditVideo';
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('creates a means to edit a video', () => {
    const editVideoWrapper = shallow(<EditVideo />)
})

it('contains a "Save" button that calls a handler', () => {
  const onSaveEditedVideo = sinon.stub()
  const editVideoWrapper = shallow(<EditVideo onSaveEditedVideo={onSaveEditedVideo} />)
  const saveButton = editVideoWrapper.find('form').find('button')
  expect(saveButton).toHaveLength(1)
  saveButton.simulate('click')
  expect(onSaveEditedVideo.calledOnce).toBe(true)
})

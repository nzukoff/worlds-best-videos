import React from 'react';
import ReactDOM from 'react-dom';
import EditVideo from './EditVideo';
import { shallow } from 'enzyme';

it('creates a means to edit a video', () => {
    const editVideoWrapper = shallow(<EditVideo />)
})
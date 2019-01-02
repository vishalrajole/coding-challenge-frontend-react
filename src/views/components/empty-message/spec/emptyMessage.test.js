import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmptyMessage from '../emptyMessage.index';

Enzyme.configure({ adapter: new Adapter() });

describe("EmptyMessage component", () => {
    test("renders", () => {
        const wrapper = shallow(<EmptyMessage></EmptyMessage>)
        expect(wrapper.exists()).toBe(true);
    })
})
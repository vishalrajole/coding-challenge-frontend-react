import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Incident from '../incident.index';

Enzyme.configure({ adapter: new Adapter() });

describe("Incident component", () => {
    test("renders", () => {
        const wrapper = shallow(<Incident></Incident>)
        expect(wrapper.exists()).toBe(true);
    })
})
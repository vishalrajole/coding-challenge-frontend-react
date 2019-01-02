import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from '../loader.index';

Enzyme.configure({ adapter: new Adapter() });

describe("Loader component", () => {
    test("renders", () => {
        const wrapper = shallow(<Loader></Loader>)
        expect(wrapper.exists()).toBe(true);
    })
})
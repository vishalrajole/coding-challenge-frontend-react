import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBox from '../searchBox.index';

Enzyme.configure({ adapter: new Adapter() });

describe("SearchBox component", () => {
    test("renders", () => {
        const wrapper = shallow(<SearchBox></SearchBox>)
        expect(wrapper.exists()).toBe(true);
    })
})
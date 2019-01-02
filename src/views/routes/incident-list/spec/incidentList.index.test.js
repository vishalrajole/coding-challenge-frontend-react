import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IncidentList from '../incidentList.index';

Enzyme.configure({ adapter: new Adapter() });

describe("IncidentList component", () => {
    test("renders", () => {
        const wrapper = shallow(<IncidentList></IncidentList>)
        expect(wrapper.exists()).toBe(true);
    });
});
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IncidentDetails from '../incidentDetails.index';

Enzyme.configure({ adapter: new Adapter() });

describe("IncidentDetails component", () => {
    test("renders", () => {
        const wrapper = shallow(<IncidentDetails></IncidentDetails>)
        expect(wrapper.exists()).toBe(true);
    })
})
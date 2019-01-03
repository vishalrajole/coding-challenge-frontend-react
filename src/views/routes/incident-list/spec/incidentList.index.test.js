import React from 'react';
import { shallow } from 'enzyme';
import IncidentList from '../incidentList.index';

describe("IncidentList component", () => {
    test(" <IncidentList /> renders correctly", () => {
        const wrapper = shallow(<IncidentList></IncidentList>)
        expect(wrapper).toMatchSnapshot();

    });
});
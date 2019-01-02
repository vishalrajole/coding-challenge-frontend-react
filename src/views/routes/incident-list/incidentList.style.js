import styled from 'styled-components';
import { SearchBoxWrapper } from '../../components/search-box/searchBox.style';
import { Button } from '../../components/button/button.index';
import { BORDER_COLOR } from '../../styles/variables';

export const StyledIncidentList = styled.ul`
    display: flex;
    flex-direction:column;
    padding: 15px 0;
    > li + li {
        border-top: 1px solid ${BORDER_COLOR};
    }
`;

export const Filter = styled.section`
    display: flex;
    margin-bottom: 20px;
    ${SearchBoxWrapper} {
        margin-right: 0.5rem;
    }
    .custom-date-picker {
        margin: 0 0.5rem;
    }
    ${Button} {
        margin-left: 0.5rem;
    }
`;
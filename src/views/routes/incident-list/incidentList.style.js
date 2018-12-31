import styled from 'styled-components';

export const StyledIncidentList = styled.ul`
    display: flex;
    flex-direction:column;
    padding: 15px 0;
    margin-bottom: 20px;
    > li + li {
        border-top: 1px solid #ddd;
    }
`;
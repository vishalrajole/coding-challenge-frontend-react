import styled from 'styled-components';

export const StyledIncident = styled.li`
    display: flex;
    padding: 15px 0;
`;

export const IncidentImage = styled.div`
    flex: 0 0 30%;
    margin-right: 15px;
    > img {
        max-width: 100%;
        height: auto
    }
`;

export const IncidentTitle = styled.h4`
    margin: 0
`;

export const SmallInfo = styled.small`
    color: #666;
`;
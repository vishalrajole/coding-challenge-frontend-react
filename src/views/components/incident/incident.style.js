import styled from 'styled-components';

export const StyledIncident = styled.li`
    display: flex;
    padding: 15px 0;
    cursor: pointer;
    &:hover {
        background: #fafafa;
    }
`;

export const IncidentImage = styled.div`
    flex: 0 0 20%;
    height: 200px;
    margin-right: 15px;
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        max-width: 100%;
        max-height: 100%;
        height: auto
    }
`;

export const IncidentTitle = styled.h4`
    margin: 0
`;

export const SmallInfo = styled.small`
    color: #666;
`;
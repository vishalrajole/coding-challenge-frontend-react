import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
`;

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    > h1, > h3 {
        margin: 0;
    }
`;
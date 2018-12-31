import styled from 'styled-components';

export const Button = styled.button`
    width: ${props => (props.block ? '100%' : 'initial')};
    height: 36px;
    padding: 5px 15px;
    border-radius: 3px;
    border: 1px solid
    ${props => {
        if (props.primary) {
            return '#127b02';
        } else if (props.secondary) {
            return '#3c3d40';
        } else {
            return '#4a90e2';
        }
    }};
    background: ${props => {
        if (props.primary) {
            return '#127b02';
        } else if (props.secondary) {
            return '#fff';
        } else {
            return '#4a90e2';
        }
    }};
    color: ${props => {
        if (props.primary) {
            return '#fff';
        } else if (props.secondary) {
            return '#3c3d40';
        } else {
            return '#fff';
        }
    }};
    font-size: 0.9rem;
    cursor: pointer;
    &:focus,
    &:hover,
    &:active,
    &.active {
    outline: none;
    border-style: none;
    border: 1px solid
    ${props => {
        if (props.primary) {
            return '#0e6700';
        } else if (props.secondary) {
            return '#0f233a';
        } else {
            return '#3970b1';
        }
    }};
    background: ${props => {
        if (props.primary) {
            return '#0e6700';
        } else if (props.secondary) {
            return '#fff';
        } else {
            return '#3970b1';
        }
    }};
    color: ${props => {
        if (props.primary) {
            return '#fff';
        } else if (props.secondary) {
            return '#0f233a';
        } else {
            return '#fff';
        }
    }};
    }
    &:disabled {
    background: ${props => '#e6e9ed'};
    color: ${props => '#9ba5b1'};
    border: 1px solid ${props => '#9ba5b1'};
    cursor: not-allowed;
    }
`;
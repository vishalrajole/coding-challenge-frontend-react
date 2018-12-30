import styled from 'styled-components';
import React from 'react';

const IconSearch = ({ className }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 32 32">
            <path d="M22.222 19.556h-1.404l-0.498-0.48c1.742-2.027 2.791-4.658 2.791-7.52 0-6.382-5.173-11.556-11.556-11.556s-11.556 5.173-11.556 11.556c0 6.382 5.173 11.556 11.556 11.556 2.862 0 5.493-1.049 7.52-2.791l0.48 0.498v1.404l8.889 8.871 2.649-2.649-8.871-8.889zM11.556 19.556c-4.427 0-8-3.573-8-8s3.573-8 8-8c4.427 0 8 3.573 8 8s-3.573 8-8 8v0z" />
        </svg>
    );
};

export const GPIconSearch = styled(IconSearch)`
  width: ${props => props.width || "1.5rem"};
  height: ${props => props.height || "1.5rem"};
  fill: ${props => props.color || props.theme.IconDefaultColor};
`;

import React, { Component } from 'react';
import Logo from '../logo/logo';
import { StyledHeader, Heading } from './header.style';

class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <Logo></Logo>
                <Heading>
                    <h1>Police Department of Berlin</h1>
                    <h3>Stolen Bikes</h3>
                </Heading>
            </StyledHeader>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, IconWrapper, SearchField } from './searchBox.style';
import { GPIconSearch } from '../../styles/iconFonts';

class SearchBox extends Component {
    render() {
        return (
            <Wrapper>
                <IconWrapper>
                    <GPIconSearch />
                </IconWrapper>
                <SearchField
                    name="searchBox"
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </Wrapper>
        );
    }
}

SearchBox.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

export default SearchBox;

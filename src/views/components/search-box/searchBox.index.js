import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBoxWrapper, IconWrapper, SearchField } from './searchBox.style';
import { GPIconSearch } from '../../styles/iconFonts';

class SearchBox extends Component {
    render() {
        return (
            <SearchBoxWrapper>
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
            </SearchBoxWrapper>
        );
    }
}

SearchBox.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

export default SearchBox;

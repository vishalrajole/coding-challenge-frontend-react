import styled from 'styled-components';
import { GPIconSearch } from '../../styles/iconFonts';

export const SearchBoxWrapper = styled.div`
  display: inline-flex;
  height: 36px;
  overflow: hidden;
  border-radius: 3px;
  background: #fff;
  border: 1px solid #ddd;
`;

export const IconWrapper = styled.div`
  padding: 7px 10px;
  color: #0f233a;
  ${GPIconSearch} {
    fill: currentColor;
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const SearchField = styled.input`
  display: flex;
  flex-grow: 1;
  font-size: 1rem;
  padding: 10px;
  border: 0;
  background: #fff;
  color: #0f233a;
  &:focus,
  &:active {
    outline: none !important;
    border-color: #ddd;
  }
`;

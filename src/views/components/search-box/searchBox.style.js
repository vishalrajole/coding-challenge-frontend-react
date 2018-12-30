import styled from 'styled-components';
import { GPIconSearch } from '../../styles/iconFonts';

export const Wrapper = styled.div`
  display: flex;
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

import styled from 'styled-components';
import { GPIconSearch } from '../../styles/iconFonts';
import { BACKGROUND_COLOR, INPUT_COLOR, BORDER_COLOR } from '../../styles/variables';

export const SearchBoxWrapper = styled.div`
  display: inline-flex;
  height: 36px;
  overflow: hidden;
  border-radius: 3px;
  background: ${BACKGROUND_COLOR};
  border: 1px solid ${BORDER_COLOR};
`;

export const IconWrapper = styled.div`
  padding: 7px 10px;
  color: ${INPUT_COLOR};
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
  background: ${BACKGROUND_COLOR};
  color: ${INPUT_COLOR};
  &:focus,
  &:active {
    outline: none !important;
    border-color: ${BORDER_COLOR};
  }
`;

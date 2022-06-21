import styled, { css } from 'styled-components';

export const Input = styled.input`
    width: 100%;
    height: 38px;
    padding: 9px;
    margin: 0 0 22px;
    box-sizing: border-box;
    outline: none;

    border: ${(props) => {
    const { theme: { layout, palette } } = props;

    return css`${layout.border.small} solid ${palette.border.default}`;
  }};
    border-radius: ${(props) => props.theme.layout.border.medium};
`;

import styled from 'styled-components';

export const Button = styled.button<{ width: string }>`
    display: inline-block;
    background-color: ${(props) => props.theme.palette.core.primary}; 
    border-radius: ${(props) => props.theme.layout.border.medium};
    width: ${(props) => props.width};
    padding: 9px; 
    color: ${(props) => props.theme.palette.typography.primary};
    border: 0;
    cursor: pointer;
`;

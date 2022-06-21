import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${(props) => props.theme.palette.core.primary}; 
    border-radius: ${(props) => props.theme.layout.border.medium};
    width: 100%;
    padding: 9px; 
    color: ${(props) => props.theme.palette.typography.primary};
    border: 0;
    cursor: pointer;
`;

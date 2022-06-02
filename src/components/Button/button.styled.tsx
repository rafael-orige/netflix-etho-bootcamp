import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.theme.palette.core.primary}; 
    border-radius: 5px;
    width: 100%;;
    padding: 9px; 
    color: ${props => props.theme.palette.typography.primary};
    border: 0;
`;
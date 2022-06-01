import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
    min-height: 100vh;
    background-color: #1A1A1A;
`;

export const Input = styled.input`  
    width: 100%;
    height: 38px;
    padding: 0 8px;
    border-radius: 5px;
    border: 1px solid #E0E0E0;
    margin: 0 0 22px;
`;

export const Button = styled.button`
    background-color: #E31A13; 
    border-radius: 5px;
    width: 100%;;
    padding: 9px; 
    color: #FFF;
    border: 0;
`;

export const Error = styled.p`
    color: #E31A13;
    font-weight: 800;
`;
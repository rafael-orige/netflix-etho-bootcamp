import styled from 'styled-components';
import { Grid } from '@mui/material';

import Background from '../../assets/images/login-background.png';

export const Wrapper = styled(Grid)`
    position: relative;
    min-height: 100vh;

    &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background-image: url(${Background});
            background-repeat: no-repeat;
            background-size: cover;
            z-index: -2;
        }

    &::after {
        position: absolute;
        content:"";
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.palette.core.secondary};
        opacity: 0.95;
        z-index: -1;
    }

    div {
      min-width: 320px;
      max-width: 400px;
      padding: 20px;
    }
`;

export const Logo = styled.img`
    width: 100%;
    margin-bottom: 139px;
`;

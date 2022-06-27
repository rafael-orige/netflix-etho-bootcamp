import React from 'react';
import { useAppDispatch as useDispatch } from '@store/hooks/hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { logoff } from '@store/user/user.slice';
import { Grid } from '@mui/material';

import Logo from '../Logo/logo';

import { UserIcon, MenuDash } from './header.styled';

export default function Header() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const from = useLocation();

  const handleUserSanitization = () => {
    dispatch(logoff());
    navigation('/login', {
      state: from,
    });
  };

  return (
    <Grid
      style={
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 'auto',
          maxWidth: '1140px',
          width: '100%',
          height: '50px',
          padding: '5px 0',
          backgroundColor: 'transparent',
        }
      }
      container
    >
      <Grid
        style={{
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
        data-testid="menu"
        onClick={handleUserSanitization}
      >
        <MenuDash />
        <MenuDash />
        <MenuDash />
      </Grid>
      <Logo style={{ height: '100%', width: 'auto' }} />
      <UserIcon />
    </Grid>
  );
}

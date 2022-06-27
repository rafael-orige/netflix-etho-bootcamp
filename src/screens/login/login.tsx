import React, { useState, useCallback, useEffect } from 'react';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { MOVIES_LIST_URL } from '@screens/movies-list/movies-list.type';
import { Grid } from '@mui/material';
import { useAppDispatch as useDispatch, useAppSelector as useSelector } from '@store/hooks/hooks';
import { tokenSelector } from '@store/user/user.selected';
import { setAuthentication } from '@store/user/user.slice';
import { Error } from '@type/yup';
import {
  Input, FormError, Button, Logo,
} from '@components';

import { Wrapper } from './login.styled';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      [target.name]: target.value,
    }));
  }, [setData]);

  const handleSend = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required('Por favor, preencha o campo de email.').email(),
        password: yup.string().required('Por favor, preencha o campo de senha.'),
      });

      await schema.validate(data);

      setError('');
      dispatch(setAuthentication(data));
    } catch (yupError: any) {
      setError((yupError as Error).errors[0]);
    }
  }, [data]);

  const userAuthenticated = useSelector(tokenSelector);
  useEffect(() => {
    if (userAuthenticated) {
      navigate(MOVIES_LIST_URL, {
        state: location,
      });
    }
  }, [userAuthenticated]);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item container justifyContent="center" alignContent="center">
        <Logo style={{
          marginBottom: '139px',
        }}
        />
        <Input
          placeholder="Email"
          type="text"
          value={data.email}
          onChange={handleChange}
          name="email"
        />
        <Input
          placeholder="Password"
          type="password"
          value={data.password}
          onChange={handleChange}
          name="password"
        />
        <FormError message={error} />
        <Button onClick={handleSend}>Entrar</Button>
      </Grid>
    </Wrapper>
  );
}

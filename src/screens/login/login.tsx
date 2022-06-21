import React, { useState, useCallback, useEffect } from 'react';
import * as yup from 'yup';
import { Grid } from '@mui/material';
import { useAppDispatch as useDispatch, useAppSelector as useSelector } from '../../redux/hooks/hooks';
import { user } from '../../redux/user/user.selected';
import userSlice from '../../redux/user/user.slice';

import NetflixLogo from '../../assets/images/netflix-logo.png';
import { Input, FormError, Button } from '../../components';
import { Wrapper, Logo } from './login.styled';
import { Error } from '../../types/yup';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();

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
      dispatch(userSlice.actions.setData({
        data: {
          email: data.email,
        },
      }));
    } catch (yupError: any) {
      setError((yupError as Error).errors[0]);
      console.log('Deu erro!', yupError);
    }
  }, [data]);

  const userRedux = useSelector(user);
  useEffect(() => {
    console.log(userRedux);
  }, [data.email]);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item container justifyContent="center" alignContent="center" xs={2}>
        <Logo src={NetflixLogo} alt="netflix-logo" />
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

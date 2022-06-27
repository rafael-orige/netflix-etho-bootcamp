import { useEffect } from 'react';
import { useAppSelector as useSelector } from '@store/hooks/hooks';
import { tokenSelector } from '@store/user/user.selected';
import { useNavigate, useLocation } from 'react-router-dom';
import { LOGIN_URL } from '@screens/login/login.type';
import { Props } from './guard.type';

export default function Guard({ children }: Props) {
  const navigate = useNavigate();
  const from = useLocation();
  const token = useSelector(tokenSelector);

  useEffect(() => {
    if (!token) {
      navigate(LOGIN_URL, {
        state: { from },
      });
    }
  }, [token]);

  if (!token) return null;

  return children;
}

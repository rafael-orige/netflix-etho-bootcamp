import React from 'react';
import NetflixLogo from '@assets/images/netflix-logo.png';

import { Props } from './logo.type';
import { LogoIcon } from './logo.styled';

export default function Logo({ style }: Props) {
  return (
    <LogoIcon src={NetflixLogo} style={style} />
  );
}

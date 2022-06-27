import React from 'react';
import { Button as ButtonStyled } from './button.styled';
import { Props } from './button.type';

export default function Button({ onClick, children, width = '100%' }: Props) {
  return <ButtonStyled width={width} onClick={onClick}>{children}</ButtonStyled>;
}

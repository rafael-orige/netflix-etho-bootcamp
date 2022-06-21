import React from 'react';
import { Input as InputStyled } from './input.styled';
import { Props } from './input.type';

export default function Input({
  onChange, placeholder, type, value, name,
}: Props) {
  return <InputStyled onChange={onChange} placeholder={placeholder} type={type} value={value} name={name} />;
}

import React from 'react';
import { Error } from './formError.styled';

export default function FormError({ message }: { message: string }) {
  const capitalizeMessage = message.charAt(0).toUpperCase() + message.slice(1);
  return <Error>{capitalizeMessage}</Error>;
}

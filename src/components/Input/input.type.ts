import React from 'react';

export type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  type?: string,
  value?: string,
  name?: string
};

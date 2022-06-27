import React from 'react';
import { Props } from './arrow.type';

import { ArrowButton } from './arrow.styled';

export default function Arrow({
  style,
  onClick,
  className,
}: Props) {
  return (
    <ArrowButton className={className} style={style} onClick={onClick} />
  );
}

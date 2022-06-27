import React, { useEffect } from 'react';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import { useAppDispatch as useDispatch, useAppSelector as useSelector } from '@store/hooks/hooks';
import { getShow } from '@store/show/show.slice';
import { selectShow } from '@store/show/show.selected';

import { Header, Button } from '@components';
import {
  Title, Paragraph, PreviewArea, Wrapper,
} from './show.styled';

export default function Show() {
  const dispatch = useDispatch();
  const showId = useParams();
  const show = useSelector(selectShow);

  useEffect(() => {
    dispatch(getShow(showId.id as string));
  }, []);

  if (!show) return null;

  return (
    <>
      <Wrapper>
        <Header />
        <PreviewArea img={show.cover} />
      </Wrapper>
      <Container>
        <Title>{show.title}</Title>
        <Paragraph>{show.description}</Paragraph>
        <Paragraph>{show.actors}</Paragraph>
        <Paragraph>{show.director}</Paragraph>
        <Button width="400px" onClick={() => console.log(show)}>Adicionar à Minha Lista</Button>
      </Container>
    </>
  );
}

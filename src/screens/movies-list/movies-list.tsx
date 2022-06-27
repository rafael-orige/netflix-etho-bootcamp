import React, { useEffect } from 'react';
import { Container } from '@mui/system';
import { useAppDispatch as useDispatch, useAppSelector as useSelector } from '@store/hooks/hooks';
import { setShows, setMyList } from '@store/shows/shows.slice';
import { ShowsList, Header } from '@components';
import { showsSelector, myListSelector } from '@store/shows/shows.selected';

export default function MovieList() {
  const dispatch = useDispatch();
  const list = useSelector(showsSelector);
  const myList = useSelector(myListSelector);

  const movies = list.Movie;
  const series = list['TV Show'];

  useEffect(
    () => {
      dispatch(setShows());
      dispatch(setMyList());
    },
    [],
  );

  return (
    <>
      <Header />
      <Container>
        <ShowsList
          autoplay
          width="95%"
          height="560px"
          arrows={false}
          shows={movies}
          slidesToShow={1}
          autoplaySpeed={2400}
        />
        {myList && <ShowsList shows={myList} title="Minha lista" />}
        {movies && <ShowsList shows={movies} title="Filmes" />}
        {series && <ShowsList shows={series} title="Séries" />}
      </Container>
    </>
  );
}

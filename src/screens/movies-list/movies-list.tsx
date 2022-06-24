import React, { useEffect } from 'react';
import { useAppDispatch as useDispatch } from '@store/hooks/hooks';
import { setShows } from '@store/shows/shows.slice';

export default function MovieList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShows());
  }, []);

  return (
    <div>Hello, world!</div>
  );
}

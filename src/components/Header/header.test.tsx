import React from 'react';
import { component } from '@test/redux-connected-component';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Component: <Header />', () => {
  const header = component(<Header />);

  it('Should render with a menu', () => {
    render(header);

    const menu = screen.getByTestId('menu');

    expect(menu).toBeInTheDocument();
  });

  it('Should render with a logo and an user icon (two images)', () => {
    render(header);

    const images = screen.getAllByRole('img');

    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
  });
});

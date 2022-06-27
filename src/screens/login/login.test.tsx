import React from 'react';
import { render, screen } from '@testing-library/react';
import { component } from '@test/redux-connected-component';
import Login from './login';

describe('Component: <Login />', () => {
  const LoginComponent = component(<Login />);

  it('Should have an image', () => {
    render(LoginComponent);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('Should have 2 inputs', () => {
    render(LoginComponent);

    const inputs = screen.getAllByRole('textbox');

    expect(inputs.length).toBe(2);
  });

  it('Should have a button', () => {
    render(LoginComponent);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});

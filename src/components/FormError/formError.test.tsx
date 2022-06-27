import React from 'react';
import { render, screen } from '@testing-library/react';
import { component } from '../../test/component';
import FormError from './formError';

describe('Component: <FormError />', () => {
  const FormErrorComponent = component(<FormError message="Error!" />);

  test('Should render an error component with "Error!" writen', () => {
    render(FormErrorComponent);

    const message = screen.getByText('Error!');

    expect(message).toBeInTheDocument();
  });
});

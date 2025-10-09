import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexVgrow1 from './FlexVgrow1';

describe('<FlexVgrow1 />', () => {
  test('it should mount', () => {
    render(<FlexVgrow1> <div>hello</div></FlexVgrow1>);

    const flexVgrow1 = screen.getByTestId('FlexVgrow1');

    expect(flexVgrow1).toBeInTheDocument();
  });
});
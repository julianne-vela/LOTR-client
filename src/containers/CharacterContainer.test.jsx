import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterContainer from './CharacterContainer';

describe('CharacterContainer component testing', () => {
  it('renders a list of characters on the screen', async () => {
    render(<CharacterContainer />);

    screen.getByText('Hello World!');
  });
});

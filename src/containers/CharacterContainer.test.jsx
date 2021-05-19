import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockCharacterData from '../fixtures/mockCharacterData.json';
import CharacterContainer from './CharacterContainer';

const server = setupServer(
  rest.get('https://the-one-api.dev/v2/character', (req, res, ctx) => {
    return res(ctx.json(mockCharacterData));
  })
);

describe('CharacterContainer component testing', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a loading screen', async () => {
    render(<CharacterContainer />);

    screen.findByRole('figure', { name: 'Loading...' });
  });

  it('displays a list of characters', async () => {
    render(<CharacterContainer />);

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});

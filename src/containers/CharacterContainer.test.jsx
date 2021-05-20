import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockCharacterData from '../fixtures/mockCharacterData.json';
import CharacterContainer from './CharacterContainer';
import CharacterDetails from '../components/characters/CharacterDetails';

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
    render(
      <MemoryRouter>
        <CharacterContainer />
      </MemoryRouter>
    );

    // testing for Character List component
    const ul = await screen.findByRole('list', { name: 'characters' });

    // testing for character card component
    await screen.findAllByRole('link');

    // Verifying snapshot matches
    expect(ul).toMatchSnapshot();
  });

  //   it('displays character details for the selected character', async () => {
  //     render(
  //       <>
  //         <MemoryRouter>
  //           <CharacterContainer />
  //         </MemoryRouter>
  //         <CharacterDetails
  //           match={{
  //             params: {
  //               id: '5cd99d4bde30eff6ebccfbbe',
  //             },
  //           }}
  //         />
  //       </>
  //     );

  //     // testing for character details component
  //     return waitFor(async () => {
  //       const details = await screen.findByRole(
  // 'region', { name: 'details' });
  //       expect(details).toMatchSnapshot();
  //     });
  //   });
});

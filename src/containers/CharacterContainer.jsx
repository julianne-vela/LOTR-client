import React from 'react';
import Loading from '../components/app/Loading';
import CharacterList from '../components/characters/CharacterList';
import { useCharacters } from '../hooks/useCharacters';

const CharacterContainer = () => {
  const { characters, loading } = useCharacters();
  if (loading) return <Loading />;

  return (
    <main className="main-container">
      <CharacterList characters={characters} />
    </main>
  );
};

export default CharacterContainer;

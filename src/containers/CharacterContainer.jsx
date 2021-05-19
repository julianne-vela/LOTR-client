import React, { useState, useEffect } from 'react';
import Loading from '../components/app/Loading';
import CharacterList from '../components/characters/CharacterList';
import fetchCharacters from '../services/api-utils';

const CharacterContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  });

  if (loading) return <Loading />;

  return (
    <main className="main-container">
      <CharacterList characters={characters} />
    </main>
  );
};

export default CharacterContainer;

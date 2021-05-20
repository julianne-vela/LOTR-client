import React from 'react';
import Loading from '../components/app/Loading';
import CharacterList from '../components/characters/CharacterList';
import { useCharacters } from '../hooks/useCharacters';
import style from '../styles/Main.css';

const CharacterContainer = () => {
  const { characters, loading } = useCharacters();
  if (loading) return <Loading />;

  return (
    <main className={style.mainContainer}>
      <CharacterList characters={characters} />
    </main>
  );
};

export default CharacterContainer;

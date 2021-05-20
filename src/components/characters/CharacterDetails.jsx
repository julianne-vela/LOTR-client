import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacters } from '../../hooks/useCharacters';
import { useOne } from '../../hooks/useOne';
import Loading from '../app/Loading';
import style from '../../styles/Characters.css';
import '../../styles/Main.css';

const CharacterDetails = () => {
  const { id } = useParams();
  const { loading, characters } = useCharacters();
  const character = useOne(id, characters);

  if (loading) return <Loading />;

  return (
    <main className={style.main}>
      <section aria-label="details" className={style.characterDetails}>
        <span>Name: {character.name}</span>
        <span>Race: {character.race}</span>
        <span>Spouse: {character.spouse}</span>
        <span>Gender: {character.gender}</span>
        <span>Hair Color: {character.hair}</span>
        <span>Realm: {character.realm}</span>
        <span>Birth: {character.birth}</span>
        <span>Deceased: {character.death}</span>
        <span>Learn More: {character.url}</span>
      </section>
    </main>
  );
};

export default CharacterDetails;

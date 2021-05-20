import React from 'react';
import PropTypes from 'prop-types';
import style from '../../styles/Characters.css';

const CharacterCard = ({ name, race }) => {
  return (
    <article className={style.characterCard}>
      <span>Name: {name}</span>
      <span>Race: {race}</span>
    </article>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
};

export default CharacterCard;

import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, race }) => {
  return (
    <article>
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

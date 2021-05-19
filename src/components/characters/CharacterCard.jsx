import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({
  name,
  race,
  spouse,
  gender,
  hair,
  realm,
  birth,
  death,
  url,
}) => {
  return (
    <>
      <p>
        <span>Name: {name}</span>
        <span>Race: {race}</span>
        <span>Spouse: {spouse}</span>
        <span>Gender: {gender}</span>
        <span>Hair Color: {hair}</span>
        <span>Realm: {realm}</span>
        <span>Birth: {birth}</span>
        <span>Deceased: {death}</span>
        <span>Learn More: {url}</span>
      </p>
    </>
  );
};

CharacterCard.propTypes = {
  birth: PropTypes.string.isRequired,
  death: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  hair: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  spouse: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CharacterCard;

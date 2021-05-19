import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  return (
    <ul aria-label="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard {...character} />
        </li>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      race: PropTypes.string.isRequired,
      spouse: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      hair: PropTypes.string.isRequired,
      realm: PropTypes.string.isRequired,
      birth: PropTypes.string.isRequired,
      death: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;

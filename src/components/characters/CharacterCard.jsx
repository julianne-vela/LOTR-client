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
        <span>{name}</span>
      </p>
    </>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
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
  }),
};

export default CharacterCard;

const URL = 'https://the-one-api.dev/v2';

const fetchCharacters = async () => {
  const res = await fetch(`${URL}/character`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  const results = await res.json();

  return results.map((character) => ({
    id: character._id,
    race: character.race,
    gender: character.gender,
    birth: character.birth,
    spouse: character.spouse,
    death: character.death,
    realm: character.realm,
    name: character.name,
    hair: character.hair,
    url: character.wikiUrl,
  }));
};

export default fetchCharacters;

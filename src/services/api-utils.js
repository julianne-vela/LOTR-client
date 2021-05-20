const fetchCharacters = async (id = null) => {
  let requestURL;

  if (id) {
    requestURL = `https://the-one-api.dev/v2/character/${id}`;
  } else {
    requestURL = 'https://the-one-api.dev/v2/character?limit=25';
  }

  const res = await fetch(requestURL, {
    headers: {
      Authorization: process.env.ACCESS_TOKEN,
    },
  });
  const { docs } = await res.json();

  return docs.map((character) => ({
    id: character._id,
    name: character.name,
    race: character.race,
    spouse: character.spouse,
    gender: character.gender,
    hair: character.hair,
    realm: character.realm,
    birth: character.birth,
    death: character.death,
    url: character.wikiUrl,
  }));
};

export default fetchCharacters;

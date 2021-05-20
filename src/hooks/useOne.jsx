export const useOne = (id, characters) => {
  return characters.find((character) => character.id === id);
};

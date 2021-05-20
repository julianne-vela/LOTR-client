import { useEffect, useState } from 'react';
import fetchCharacters from '../services/api-utils';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchCharacters()
      .then((characters) => {
        if (mounted) {
          setCharacters(characters);
        }
      })
      .finally(() => setLoading(false));

    return () => (mounted = false);
  }, []);

  return { characters, loading };
};

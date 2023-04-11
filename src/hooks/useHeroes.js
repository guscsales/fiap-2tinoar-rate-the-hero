import React from 'react';
import useAxios from 'axios-hooks';

export default function useHeroes(searchValue) {
  const [{ data: heroes, loading: isLoadingHeroes }, searchHero] = useAxios(
    `/search/${searchValue}`,
    {
      manual: true,
    }
  );

  React.useEffect(() => {
    searchHero();
  }, []);

  return {
    heroes: heroes?.results || [],
    isLoadingHeroes,
    searchHero,
  };
}

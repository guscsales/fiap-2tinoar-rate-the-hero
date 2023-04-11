import axios from 'axios';
import useAxios from 'axios-hooks';

export default function useHero(heroId) {
  const [{ data: hero, loading: isLoadingHero }] = useAxios(`/${heroId}`, {
    manual: heroId == null,
  });

  function setHeroAssessment(hero) {
    // localStorage.setItem(hero.id, JSON.stringify(hero));
    axios.post(`/${heroId}`, { hero });
  }

  function getHeroAssessment(heroId) {
    return JSON.parse(localStorage.getItem(heroId));
  }

  return {
    hero,
    isLoadingHero,
    setHeroAssessment,
    getHeroAssessment,
  };
}

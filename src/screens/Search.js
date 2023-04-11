import styled from 'styled-components';
import HeroCard from '../components/HeroCard/HeroCard';
import { Box, Flex } from 'reflexbox';
import { Spaces } from '../shared/DesignTokens';
import SearchField from '../common-components/SearchField/SearchField';
import Button from '../common-components/Button/Button';
import React from 'react';
import Alert from '../common-components/Alert/Alert';
import useHeroes from '../hooks/useHeroes';
import HeroCardLoader from '../components/HeroCard/HeroCardLoader';

const HeroesGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${Spaces.ONE_HALF};

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${Spaces.TWO};
  }
`;

export default function Search() {
  const [search, setSearch] = React.useState({
    value: 'captain',
    doSearch: true,
  });
  const { heroes, isLoadingHeroes, error, searchHero } = useHeroes(
    search.value
  );

  React.useEffect(() => {
    if (search.doSearch) {
      searchHero().then(() => {
        setSearch((prevValue) => ({ ...prevValue, doSearch: false }));
      });
    }
  }, [search]);

  function handleUpdateSearchValue({ target: { value } }) {
    setSearch({ value });
  }

  function handleSearch() {
    setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
  }

  return (
    <>
      <Flex
        width={['100%', '600px']}
        mx={[Spaces.NONE, 'auto']}
        mt={[Spaces.THREE, Spaces.FIVE]}
        px={[Spaces.ONE, Spaces.NONE]}
        mb={[Spaces.TWO, Spaces.FOUR]}
      >
        <Box flexGrow="1">
          <SearchField
            placeholder="Digite o nome do herói"
            onKeyUp={handleUpdateSearchValue}
          />
        </Box>
        <Box ml={Spaces.TWO}>
          <Button onClick={handleSearch}>Buscar</Button>
        </Box>
      </Flex>

      <HeroesGrid px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
        {isLoadingHeroes && (
          <>
            <HeroCardLoader />
            <HeroCardLoader />
            <HeroCardLoader />
            <HeroCardLoader />
          </>
        )}
        {!isLoadingHeroes &&
          heroes.map((hero) => (
            <HeroCard
              key={hero.id}
              id={hero.id}
              secretIdentity={hero.name}
              name={hero.biography['full-name']}
              picture={hero.image.url}
              universe={hero.biography.publisher}
            />
          ))}
      </HeroesGrid>

      {!isLoadingHeroes && (heroes.length === 0 || error) && (
        <Box px={[Spaces.ONE, Spaces.TWO]}>
          <Alert type="info">
            Nenhum registro de herói ou heroína foi encontrado.
          </Alert>
        </Box>
      )}
    </>
  );
}

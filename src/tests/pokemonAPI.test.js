import { baseURL, pokemonCountURL, getPokemonCount, getPokemonDetails, getWildPokemon } from '../services/pokemonAPI';

test('Get details for Bulbasaur', async () => {
  const pokemon = await getPokemonDetails(`${baseURL}${1}`)
  expect(pokemon.name).toBe('bulbasaur')
});

test('Get 20 pokemon', async () => {
  const firstTwentyPokemon = await getWildPokemon(baseURL);
  expect(firstTwentyPokemon.results.length).toBe(20);
});

test('Get Pokemon count', async () => {
  const pokemonCount = await getPokemonCount(pokemonCountURL);
  expect(pokemonCount.count).toBeGreaterThanOrEqual(893);
  // Using this matcher because the API will likely grow as new Generations of Pokemon are released
})



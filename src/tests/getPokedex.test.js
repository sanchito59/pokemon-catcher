import { getPokedex } from '../helpers/getPokedex';

test('Get empty Pokedex from localStorage', () => {
  expect(getPokedex()).toEqual([]);
});


test('Get Pokdex with a pokemon in it', () => {
  const pokedexExample = [{ name: 'ditto' }];
  localStorage.setItem("caughtPokemon", JSON.stringify(pokedexExample));

  expect(getPokedex()).toEqual(pokedexExample);
});

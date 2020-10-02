export const getPokedex = () => {
  let allCaughtPokemon = JSON.parse(localStorage.getItem("caughtPokemon"));
  if (allCaughtPokemon === null) allCaughtPokemon = [];
  return allCaughtPokemon;
}

export const baseURL = "https://pokeapi.co/api/v2/pokemon/";

// 10 at a time, with access to pagination- send pokemon URL through getPokemonDetails
export const getWildPokemon = async (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      });
  });
};

// Returns the count of the current Pokemon in the API
export const getPokemonCount = async (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      });
  });
};

// Gets the details for a pokemon
export const getPokemonDetails = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return reject('Pokemon Not found');
        } else {
          return res.json()
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => console.error(error))
  });
};

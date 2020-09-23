import React, { useEffect, useState } from "react";
import PokemonCard from "../../molecules/PokemonCard";
import {
  getWildPokemon,
  getPokemonDetails,
} from "../../../services/pokemonAPI";

const WildEncounter = () => {
  const [wildPokemon, setWildPokemon] = useState(null);
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function fetchPokemon() {
      const response = await getWildPokemon(baseURL);
      await loadPokemonData(response.results);
    }
    fetchPokemon();
  }, []);

  const loadPokemonData = async (data) => {
    const allPokemon = await Promise.all(
      data.map(async (pokemon) => {
        const singlePokemon = await getPokemonDetails(pokemon);
        return singlePokemon;
      })
    );
    setWildPokemon(allPokemon);
  };

  return (
    <div>
      <h1>Wild Encounter - Route 102</h1>
      {wildPokemon && (
        <div>
          {wildPokemon.map((pokemon) => {
            return (
              <PokemonCard key={pokemon.id} {...pokemon} captureControls />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WildEncounter;

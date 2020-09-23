import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { usePokemonContext } from "../../../context/PokemonContext";
import DetailedPokemonCard from "../../molecules/DetailedPokemonCard";

const PokemonPage = ({ match }) => {
  const { caughtPokemon } = usePokemonContext();
  const [singlePokemon, setSinglePokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSinglePokemon = (id) => {
    const pokemon = caughtPokemon.filter((pokemon) => pokemon.id == id);
    setSinglePokemon(pokemon);
    setLoading(false);
  };

  useEffect(() => {
    getSinglePokemon(match.params.id);
  }, [match.params.id]);

  return singlePokemon === null ? (
    <CircularProgress />
  ) : (
    <DetailedPokemonCard pokemon={singlePokemon} />
  );
};

export default PokemonPage;

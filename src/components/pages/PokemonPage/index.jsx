import React, { useCallback, useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { usePokemonContext } from "../../../context/PokemonContext";
import DetailedPokemonCard from "../../molecules/DetailedPokemonCard";

const PokemonPage = ({ match }) => {
  const { caughtPokemon } = usePokemonContext();
  const [singlePokemon, setSinglePokemon] = useState(null);

  const getSinglePokemon = useCallback(
    (uniqueID) => {
      const pokemon = caughtPokemon.filter(
        (pokemon) => pokemon.uniqueID === uniqueID
      );
      setSinglePokemon(pokemon);
    },
    [caughtPokemon]
  );

  useEffect(() => {
    getSinglePokemon(match.params.id);
  }, [getSinglePokemon, match.params.id]);

  return singlePokemon === null ? (
    <CircularProgress />
  ) : (
    <DetailedPokemonCard pokemon={singlePokemon} />
  );
};

export default PokemonPage;

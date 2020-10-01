import React, { useCallback, useEffect, useState } from "react";
import {
  Breadcrumbs,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
      setSinglePokemon(pokemon[0]);
    },
    [caughtPokemon]
  );

  useEffect(() => {
    getSinglePokemon(match.params.id);
  }, [getSinglePokemon, match.params.id]);

  return singlePokemon === null ? (
    <CircularProgress />
  ) : (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb" style={{ margin: "40px 0px" }}>
        <Link color="inherit" to="/">
          Pokédex
        </Link>
        <Link color="inherit" to="/wild-encounter">
          Route 102
        </Link>
        <Typography color="textPrimary">{singlePokemon.new_name}</Typography>
      </Breadcrumbs>
      <DetailedPokemonCard pokemon={singlePokemon} />
    </Container>
  );
};

export default PokemonPage;

import React from "react";
import PokemonCard from "../../molecules/PokemonCard";
import { Grid, Container, Typography } from "@material-ui/core";
import { usePokemonContext } from "../../../context/PokemonContext";

const WildEncounter = () => {
  const { wildPokemon } = usePokemonContext();

  return (
    <Container>
      <Typography component="h1" variant="h3" style={{ marginBottom: "40px" }}>
        Wild Encounter - Route 102
      </Typography>
      {wildPokemon && (
        <Grid container spacing={4}>
          {wildPokemon.map((pokemon) => {
            return (
              <Grid item lg={6}>
                <PokemonCard key={pokemon.id} {...pokemon} captureControls />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

export default WildEncounter;

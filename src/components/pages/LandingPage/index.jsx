import React from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../../molecules/PokemonCard";
import { Grid, Container, Typography } from "@material-ui/core";
import { usePokemonContext } from "../../../context/PokemonContext";

const LandingPage = () => {
  const { caughtPokemon } = usePokemonContext();

  return (
    <Container>
      {caughtPokemon !== null && caughtPokemon.length > 0 ? (
        <Grid container spacing={4}>
          {caughtPokemon.map((pokemon) => {
            return (
              <Grid item lg={6}>
                <PokemonCard
                  key={pokemon.id}
                  {...pokemon}
                  caught
                  captureControls={false}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Typography variant="h3" component="h3">
          Nothing caught yet? Let's change that!
          <Link to="/wild-encounter">Route 102 awaits</Link>
        </Typography>
      )}
    </Container>
  );
};

export default LandingPage;

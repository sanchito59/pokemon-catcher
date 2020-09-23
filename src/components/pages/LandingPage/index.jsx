import React from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../../molecules/PokemonCard";
import { Grid, Box, Container, Typography } from "@material-ui/core";
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
        <Box>
          <Typography variant="h3" component="h3">
            Nothing caught yet?{" "}
            <Link to="/wild-encounter" style={{ marginTop: "12px" }}>
              Route 102 awaits!
            </Link>
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default LandingPage;

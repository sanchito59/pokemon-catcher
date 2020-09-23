import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PokemonCard from "../../molecules/PokemonCard";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { usePokemonContext } from "../../../context/PokemonContext";

const MainHeader = styled(Typography)`
  margin-bottom: 40px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const FlexWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const FlexGrid = styled(Grid)`
  display: false;
  justify-content: center;
  margin-bottom: 40px;
`;

const LandingPage = () => {
  const { caughtPokemon } = usePokemonContext();

  return (
    <Container>
      <MainHeader variant="h3" component="h1">
        Your Pokedex
      </MainHeader>
      {caughtPokemon !== null && caughtPokemon.length > 0 ? (
        <>
          <FlexWrapper>
            <Button variant="contained" color="primary">
              <StyledLink to="/wild-encounter">Catch More Pokemon!</StyledLink>
            </Button>
          </FlexWrapper>
          <Grid
            container
            spacing={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {caughtPokemon.map((pokemon) => {
              return (
                <FlexGrid item lg={6}>
                  <StyledLink to={`/pokemon/${pokemon.uniqueID}`}>
                    <PokemonCard
                      key={pokemon.id}
                      {...pokemon}
                      caught
                      captureControls={false}
                    />
                  </StyledLink>
                </FlexGrid>
              );
            })}
          </Grid>
        </>
      ) : (
        <FlexWrapper>
          <Typography variant="h3" component="h1">
            Nothing caught yet?{" "}
            <Button variant="contained" color="primary">
              <StyledLink to="/wild-encounter">Route 102 awaits!</StyledLink>
            </Button>
          </Typography>
        </FlexWrapper>
      )}
    </Container>
  );
};

export default LandingPage;

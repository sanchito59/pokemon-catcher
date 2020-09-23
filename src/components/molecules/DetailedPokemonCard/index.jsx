import React, { useState } from "react";
import styled from "styled-components";
import { Button, Box, Container, Paper, Typography } from "@material-ui/core";
import PokemonAbilities from "../../atoms/PokemonAbilities";
import PokemonTypes from "../../atoms/PokemonTypes";

const OuterCard = styled(Paper)`
  margin-top: 40px;
  padding: 20px;
`;

const DetailedPokemonCard = (props) => {
  const { pokemon } = props;
  const { abilities, name, new_name, sprites, types } = pokemon[0];
  const { front_default } = sprites;
  const [statsVisible, setStatsVisible] = useState(false);

  return (
    <Container>
      <Box>
        <OuterCard elevation={4}>
          <img
            src={front_default}
            alt={`Sprite of ${new_name}, originally (${name})`}
          />
          <Typography variant="body1">Name: {new_name}</Typography>
          <Typography variant="body1">Orig. Name: ({name})</Typography>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{ marginTop: "10px" }}
            onClick={() => setStatsVisible(!statsVisible)}
          >
            {statsVisible ? "Hide" : "View"} Stats
          </Button>
          {statsVisible && (
            <>
              <PokemonAbilities abilities={abilities} />
              <PokemonTypes types={types} />
            </>
          )}
        </OuterCard>
      </Box>
    </Container>
  );
};

export default DetailedPokemonCard;

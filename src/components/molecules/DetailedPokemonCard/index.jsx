import React, { useState } from "react";
import styled from "styled-components";
import { Button, Box, Container, Paper, Typography } from "@material-ui/core";
import PokemonAbilities from "../../atoms/PokemonAbilities";
import PokemonTypes from "../../atoms/PokemonTypes";

const OuterCard = styled(Paper)`
  margin-top: 40px;
  padding: 20px;
`;

const ImageContainer = styled(Container)`
  display: flex;
  margin-bottom: 20px;
`;

const CaptionBox = styled(Box)`
  text-align: center;
`;

const DetailedPokemonCard = (props) => {
  const { pokemon } = props;
  const { id, abilities, name, new_name, sprites, types } = pokemon[0];
  const { front_default, back_default, front_shiny } = sprites;
  const [statsVisible, setStatsVisible] = useState(false);

  return (
    <Container maxWidth="sm">
      <Box>
        <OuterCard elevation={4}>
          <Typography variant="caption">No. {id}</Typography>
          <ImageContainer>
            <Box>
              <Box>
                <img
                  src={front_default}
                  alt={`Sprite of front view of ${new_name}, originally (${name})`}
                />
              </Box>
              <CaptionBox>
                <Typography variant="caption">Front</Typography>
              </CaptionBox>
            </Box>
            <Box>
              <Box>
                <img
                  src={back_default}
                  alt={`Sprite of back view of ${new_name}, originally (${name})`}
                />
              </Box>
              <CaptionBox>
                <Typography variant="caption">Back</Typography>
              </CaptionBox>
            </Box>
            {front_shiny && (
              <Box>
                <Box>
                  <img
                    src={front_shiny}
                    alt={`Sprite of shiny ${new_name}, originally (${name})`}
                  />
                </Box>
                <CaptionBox>
                  <Typography variant="caption">Shiny variant</Typography>
                </CaptionBox>
              </Box>
            )}
          </ImageContainer>
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

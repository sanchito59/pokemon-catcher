import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { Button, Box, Container, Paper, Typography } from "@material-ui/core";
import PokemonStats from "../../atoms/PokemonStats";
import PokemonAbilities from "../../atoms/PokemonAbilities";
import PokemonTypes from "../../atoms/PokemonTypes";
import SpriteImg from "../../atoms/SpriteImg";
import { usePokemonContext } from "../../../context/PokemonContext";
import { useHistory } from "react-router-dom";

const OuterCard = styled(Paper)`
  margin-top: 40px;
  padding: 20px;
`;

const ImageContainer = styled(Container)`
  display: flex;
  margin-bottom: 20px;
`;

const DetailedPokemonCard = (props) => {
  const { pokemon } = props;
  const {
    id,
    uniqueID,
    abilities,
    name,
    new_name,
    sprites,
    types,
    captureDate,
    stats,
  } = pokemon[0];

  const { front_default, back_default, front_shiny } = sprites;
  const [statsVisible, setStatsVisible] = useState(false);
  const {
    caughtPokemon,
    newEncounters,
    setNewEncounters,
  } = usePokemonContext();
  const history = useHistory();

  const releasePokemon = (id) => {
    localStorage.setItem(
      "caughtPokemon",
      JSON.stringify(caughtPokemon.filter((pokemon) => pokemon.uniqueID !== id))
    );
    setNewEncounters(!newEncounters);
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <OuterCard elevation={4}>
          <Typography variant="caption">No. {id}</Typography>
          <ImageContainer>
            {front_default && (
              <SpriteImg
                img={front_default}
                alt={`Sprite of front view of ${new_name}, originally (${name})`}
                caption="Front"
              />
            )}
            {back_default && (
              <SpriteImg
                img={back_default}
                alt={`Sprite of the back of ${new_name}, originally (${name})`}
                caption={"Back"}
              />
            )}
            {front_shiny && (
              <SpriteImg
                img={front_shiny}
                alt={`Sprite of shiny ${new_name}, originally (${name})`}
                caption={"Shiny variant"}
              />
            )}
          </ImageContainer>
          <Typography variant="body1">Name: {new_name}</Typography>
          <Typography variant="body1">Orig. Name: ({name})</Typography>
          {captureDate && (
            <Typography variant="caption">
              First Encountered:{" "}
              {moment(captureDate).format("ddd MMM Do | hh:mma")}
            </Typography>
          )}
          <br />
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{ marginTop: "10px" }}
            onClick={() => setStatsVisible(!statsVisible)}
          >
            {statsVisible ? "Hide" : "View"} Stats
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            style={{ marginTop: "10px", marginLeft: "12px" }}
            onClick={() => {
              releasePokemon(uniqueID);
              history.push("/");
            }}
          >
            release {new_name}
          </Button>
          {statsVisible && (
            <>
              <PokemonStats stats={stats} />
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

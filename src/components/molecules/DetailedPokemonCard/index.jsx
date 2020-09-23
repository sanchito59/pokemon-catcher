import React, { useState } from "react";
import styled from "styled-components";
import { Button, Box, Container, Paper, Typography } from "@material-ui/core";

const OuterCard = styled(Paper)`
  margin-top: 40px;
  padding: 20px;
`;

const DetailedPokemonCard = (props) => {
  const { pokemon } = props;
  const { abilities, name, new_name, sprites, types } = pokemon[0];
  const { front_default } = sprites;
  const [statsVisible, setStatsVisible] = useState(false);

  console.log(types);

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
              <ul>
                <Typography variant="body1">Abilities</Typography>
                {abilities.map((abilityObj) => {
                  return (
                    <li key={abilityObj.ability.name}>
                      {abilityObj.ability.name} |{" "}
                      <a
                        href={abilityObj.ability.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        More Info
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul>
                <Typography variant="body1">Types</Typography>
                {types.map((typeObj) => {
                  return (
                    <li key={typeObj.type.name}>
                      {typeObj.type.name} |{" "}
                      <a
                        href={typeObj.type.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        More Info
                      </a>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </OuterCard>
      </Box>
    </Container>
  );
};

export default DetailedPokemonCard;

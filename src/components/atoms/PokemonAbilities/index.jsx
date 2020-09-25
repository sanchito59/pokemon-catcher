import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const AbilitiesList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0px;
`;

const Value = styled.li`
  list-style: none;
  margin-bottom: 4px;
  text-align: center;
`;

const PokemonAbilities = ({ abilities }) => {
  return (
    <>
      <Typography
        variant="body2"
        paragraph
        align="center"
        style={{ margin: "16px 0px" }}
      >
        Abilities:
      </Typography>
      <AbilitiesList>
        {abilities.map((abilityObj) => {
          return (
            <Value key={abilityObj.ability.name}>
              {abilityObj.ability.name}
            </Value>
          );
        })}
      </AbilitiesList>
    </>
  );
};

export default PokemonAbilities;

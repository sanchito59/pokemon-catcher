import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import typeColorMap from "./helpers/typeColorMap";

const Value = styled.li`
  list-style: none;
  background: ${({ color }) => color};
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 4px;
  text-align: center;
`;

const PokemonTypes = ({ types }) => {
  return (
    <ul>
      <Typography variant="body2" paragraph align="center">
        Types:
      </Typography>
      {types.map((typeObj) => {
        return (
          <Value
            key={typeObj.type.name}
            color={typeColorMap[typeObj.type.name]}
          >
            {typeObj.type.name}
          </Value>
        );
      })}
    </ul>
  );
};

export default PokemonTypes;

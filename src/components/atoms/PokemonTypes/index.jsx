import React from "react";
import { Typography } from "@material-ui/core";

const PokemonTypes = ({ types }) => {
  return (
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
  );
};

export default PokemonTypes;

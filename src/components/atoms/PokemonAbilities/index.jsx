import React from "react";
import { Typography } from "@material-ui/core";

const PokemonAbilities = ({ abilities }) => {
  return (
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
              API Reference
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonAbilities;

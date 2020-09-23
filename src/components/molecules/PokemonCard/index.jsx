import React from "react";
import PropTypes from "prop-types";

const PokemonCard = ({
  captureControls,
  id,
  abilities,
  name,
  sprites: { front_default },
  types,
}) => {
  return (
    <div>
      <img src={front_default} alt={`Sprite of ${name}`} />
      <h3>
        {name} - {id}
      </h3>
      {captureControls && <h1>CAPTURE</h1>}
    </div>
  );
};

PokemonCard.propTypes = {
  captureControls: PropTypes.bool,
};

PokemonCard.defaultProps = {
  captureControls: false,
};

export default PokemonCard;

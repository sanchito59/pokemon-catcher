import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Box, Container, IconButton, Paper } from "@material-ui/core";
import PokemonForm from "../PokemonForm";
import GetAppIcon from "@material-ui/icons/GetApp";

const StyledPaper = styled(Paper)`
  padding: 20px;
  display: flex;
`;

const PokemonCard = (props) => {
  const {
    captureControls,
    id,
    abilities,
    name,
    sprites: { front_default },
    types,
  } = props;

  const [controlVisibility, setControlVisibility] = useState(captureControls);
  const [formVisibility, setFormVisibility] = useState(false);

  return (
    <Container>
      <Box onClick={() => setControlVisibility(!controlVisibility)}>
        <StyledPaper elevation={4}>
          <img src={front_default} alt={`Sprite of ${name}`} />
        </StyledPaper>
      </Box>
      {controlVisibility && (
        <Box>
          <IconButton
            aria-label="capture"
            style={{ width: "96px", height: "96px" }}
            onClick={() => {
              setFormVisibility(true);
            }}
          >
            <GetAppIcon fontSize="large" />
          </IconButton>
        </Box>
      )}
      {formVisibility && <PokemonForm {...props} />}
    </Container>
  );
};

PokemonCard.propTypes = {
  captureControls: PropTypes.bool,
};

PokemonCard.defaultProps = {
  captureControls: false,
};

export default PokemonCard;

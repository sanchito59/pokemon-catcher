import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import PokemonForm from "../PokemonForm";
import GetAppIcon from "@material-ui/icons/GetApp";

const StyledPaper = styled(Paper)`
  padding: 20px;
  display: flex;
`;

const PokemonCard = (props) => {
  const {
    id,
    name,
    new_name,
    captureControls,
    sprites: { front_default },
    caught,
  } = props;

  const [controlVisibility, setControlVisibility] = useState(false);
  const [formVisibility, setFormVisibility] = useState(false);

  return (
    <Container>
      <Box
        onClick={() =>
          captureControls && setControlVisibility(!controlVisibility)
        }
      >
        <StyledPaper elevation={4}>
          <img src={front_default} alt={`Sprite of ${name}`} />
          {caught && (
            <Link to={`/pokemon/${id}`}>
              <Typography variant="body1">{new_name}</Typography>
            </Link>
          )}
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
  caught: PropTypes.bool,
};

PokemonCard.defaultProps = {
  captureControls: false,
  caught: false,
};

export default PokemonCard;

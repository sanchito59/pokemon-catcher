import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Container, Button, Paper, Typography } from "@material-ui/core";
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

  useEffect(() => {
    if (controlVisibility === false) {
      setFormVisibility(false);
    }
  }, [controlVisibility]);

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
      {controlVisibility && formVisibility === false && (
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<GetAppIcon fontSize="large" />}
            style={{ marginTop: "20px" }}
            onClick={() => {
              setFormVisibility(true);
            }}
          >
            CATCH WILD {name}!
          </Button>
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

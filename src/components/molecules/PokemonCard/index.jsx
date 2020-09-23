import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Button,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import PokemonTypes from "../../atoms/PokemonTypes";
import PokemonForm from "../PokemonForm";
import GetAppIcon from "@material-ui/icons/GetApp";

const StyledPaper = styled(Paper)`
  padding: 20px;
  display: flex;
`;

const PokemonCard = (props) => {
  const {
    name,
    new_name,
    captureControls,
    sprites: { front_default },
    types,
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
        <Grid container style={{ justifyContent: "center" }}>
          <StyledPaper elevation={4}>
            <Grid item xs={4}>
              <img src={front_default} alt={`Sprite of ${name}`} />
            </Grid>
            {caught && (
              <Grid item xs={8}>
                <StyledPaper elevation={0}>
                  <Box>
                    <Box>
                      <Link to={`/pokemon/${new_name}`}>
                        <Typography variant="body1">{new_name}</Typography>
                      </Link>
                    </Box>
                    <Box>
                      <Typography variant="caption">Level 1</Typography>
                    </Box>
                    <Box>
                      <PokemonTypes types={types} />
                    </Box>
                  </Box>
                </StyledPaper>
              </Grid>
            )}
          </StyledPaper>
        </Grid>
      </Box>
      {controlVisibility && formVisibility === false && (
        <Box style={{ display: "flex", justifyContent: "center" }}>
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
      <Box style={{ display: "flex", justifyContent: "center" }}>
        {formVisibility && <PokemonForm {...props} />}
      </Box>
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

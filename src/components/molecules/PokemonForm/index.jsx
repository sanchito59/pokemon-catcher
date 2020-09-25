import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Box,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { usePokemonContext } from "../../../context/PokemonContext";
import { useHistory } from "react-router-dom";

const FormContainer = styled(Container)`
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid black;
`;

const FlexCaption = styled(Typography)`
  display: flex;
`;

const PokemonForm = (props) => {
  const { caughtPokemon } = usePokemonContext();
  const [newName, setNewName] = useState("");
  const history = useHistory();

  const { name, types } = props;

  const addPokemon = (pokemon, newName) => {
    const newPokemon = Object.assign(
      { new_name: newName, uniqueID: uuidv4(), captureDate: Date.now() },
      pokemon
    );
    caughtPokemon.push(newPokemon);
    localStorage.setItem("caughtPokemon", JSON.stringify(caughtPokemon));
  };

  return (
    <FormContainer>
      <Box my={4}>
        <Typography variant="h4" component="h1" paragraph>
          Name your Pokemon!
        </Typography>
        <Typography variant="body2">Types: </Typography>
        <FlexCaption variant="caption">
          {types.map((typeObj) => {
            return <p>| {typeObj.type.name} |</p>;
          })}
        </FlexCaption>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPokemon(props, newName);
            setNewName("");
            history.push("/");
          }}
        >
          <FormControl style={{ marginBottom: "32px" }}>
            <TextField
              placeholder={name}
              value={newName}
              label="New Name"
              onChange={(e) => setNewName(e.target.value)}
              required
            />
          </FormControl>
          <br />
          <Button variant="outlined" type="submit">
            Add to Pokedex
          </Button>
        </form>
      </Box>
    </FormContainer>
  );
};

export default PokemonForm;

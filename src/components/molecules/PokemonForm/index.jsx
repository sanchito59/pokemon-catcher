import React, { useState } from "react";
import {
  Button,
  Box,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import { usePokemonContext } from "../../../context/PokemonContext";

const PokemonForm = (props) => {
  const { caughtPokemon } = usePokemonContext();
  const [newName, setNewName] = useState("");

  const addPokemon = (pokemon, newName) => {
    const newPokemon = Object.assign({ new_name: newName }, pokemon);
    caughtPokemon.push(newPokemon);
    localStorage.setItem("caughtPokemon", JSON.stringify(caughtPokemon));
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" paragraph>
          Name your Pokemon!
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPokemon(props, newName);
            setNewName("");
          }}
        >
          <FormControl style={{ marginBottom: "32px" }}>
            <TextField
              placeholder={props.name}
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </FormControl>
          <br />
          <Button variant="outlined" type="submit">
            Save Pokemon
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default PokemonForm;

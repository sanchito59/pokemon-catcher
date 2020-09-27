import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import DetailedPokemonCard from "../../molecules/DetailedPokemonCard";
import PageLoading from "../../atoms/PageLoading";
import { baseURL, getPokemonDetails } from "../../../services/pokemonAPI";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  const searchForPokemon = async (pokemon) => {
    setLoading(true);

    const singlePokemon = await getPokemonDetails(
      baseURL + pokemon
    ).catch((err) => setError(err));
    setLoading(false);

    if (error) {
      return;
    } else {
      setPokemon(singlePokemon);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" paragraph>
        Search For Pokemon
      </Typography>
      <Box>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setError(null);
            setPokemon(null);
            searchForPokemon(searchTerm.toLowerCase());
          }}
        >
          <TextField
            label="Pokemon Name"
            placeholder="Pikachu"
            value={searchTerm}
            required
            error={error}
            helperText={error}
            variant="outlined"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Box>
            <Button
              variant="outlined"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Search
            </Button>
          </Box>
        </form>
      </Box>
      {loading ? (
        <PageLoading />
      ) : (
        <>
          {pokemon && (
            <DetailedPokemonCard pokemon={pokemon} captured={false} />
          )}
        </>
      )}
    </Container>
  );
};

export default SearchPage;

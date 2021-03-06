import React, { useState, useEffect, } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/molecules/Navbar';
import LandingPage from './components/pages/LandingPage';
import WildEncounter from './components/pages/WildEncounter';
import PokemonPage from './components/pages/PokemonPage';
import SearchPage from './components/pages/SearchPage';
import { randomNumberWithinRange } from './helpers/randomNumberWithinRange';
import { getPokedex } from './helpers/getPokedex';
import { PokemonContext } from './context/PokemonContext';
import { baseURL, pokemonCountURL, getPokemonCount, getPokemonDetails, } from "./services/pokemonAPI";

function App() {
  const [caughtPokemon, setCaughtPokemon] = useState(null);
  const [wildPokemon, setWildPokemon] = useState(null);
  const [newEncounters, setNewEncounters] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemonData = async () => {
      setLoading(true);
      const response = await getPokemonCount(pokemonCountURL)

      const resources = new Array(10).fill().map(() => `${baseURL}${randomNumberWithinRange(1, response.count)}`);

      await loadPokemonData(resources);
    }
    getPokemonData()
  }, [newEncounters]);

  const loadPokemonData = async data => {
    const allPokemon = await Promise.all(
      data.map(async (pokemon) => {
        const singlePokemon = await getPokemonDetails(pokemon);
        return singlePokemon;
      })
    );
    setWildPokemon(allPokemon);

    setCaughtPokemon(getPokedex());
    setLoading(false);
  };

  return (
    <PokemonContext.Provider value={{ caughtPokemon, wildPokemon, newEncounters, setNewEncounters, loading, setLoading }}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/wild-encounter" component={WildEncounter} />
            <Route exact path="/pokemon/:id" component={PokemonPage} />
            <Route exact path="/search" component={SearchPage} />
          </Switch>
        </>
      </Router>
    </PokemonContext.Provider>
  );
}

export default App;

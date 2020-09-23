import React, { useState, useEffect, } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import WildEncounter from './components/pages/WildEncounter';
import PokemonPage from './components/pages/PokemonPage';
import { PokemonContext } from './context/PokemonContext';
import { getWildPokemon, getPokemonDetails } from "./services/pokemonAPI";

function App() {
  const [caughtPokemon, setCaughtPokemon] = useState(null);
  const [wildPokemon, setWildPokemon] = useState(null);
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function fetchPokemon() {
      const response = await getWildPokemon(`${baseURL}?limit=10`);
      await loadPokemonData(response.results);
    }
    fetchPokemon();
  }, []);

  const loadPokemonData = async (data) => {
    const allPokemon = await Promise.all(
      data.map(async (pokemon) => {
        const singlePokemon = await getPokemonDetails(pokemon);
        return singlePokemon;
      })
    );
    localStorage.setItem("wildPokemon", JSON.stringify(allPokemon));
    setWildPokemon(allPokemon);

    let allCaughtPokemon = JSON.parse(localStorage.getItem("caughtPokemon"));
    if (allCaughtPokemon === null) {
      allCaughtPokemon = [];
    }
    setCaughtPokemon(allCaughtPokemon);
  };

  return (
    <PokemonContext.Provider value={{ caughtPokemon, wildPokemon }}>
      <Router>
        <>
          <Link to="/">Poké Center</Link>
          <Link to="/wild-encounter">Route 102</Link>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/wild-encounter" component={WildEncounter} />
            <Route exact path="/pokemon/:id" component={PokemonPage} />
          </Switch>
        </>
      </Router>
    </PokemonContext.Provider>
  );
}

export default App;

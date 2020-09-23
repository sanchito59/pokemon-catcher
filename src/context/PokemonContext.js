import { createContext, useContext } from 'react';

export const PokemonContext = createContext('PokemonContext');

export function usePokemonContext() {
  return useContext(PokemonContext);
}

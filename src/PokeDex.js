import React from "react";
import { v4 as uuid } from "uuid";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";
import axios from "axios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
const PokeDex = () => {
  const [pokemon, addPokemon] = useAxios('https://pokeapi.co/api/v2/pokemon');

  const handleAddPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
      addPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
    } catch (error) {
      console.error('Error adding Pokemon', error);
    }
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <button onClick={handleAddPokemon}>Add a Pokemon</button>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
};

export default PokeDex;

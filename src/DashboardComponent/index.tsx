import { useState } from "react";
import "./styles.css";
import { useWindowSize } from "./resixe-hook";

const pokemon = [
  {
    name: "Bulbasaur",
    type: "Grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  },
  {
    name: "Charmander",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
  },
  {
    name: "Squirtle",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    description:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
  },
  {
    name: "Pikachu",
    type: "Electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    description:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
  },
  {
    name: "Eevee",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    description:
      "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
  },
];

const DashboardComponent = () => {
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0);

  const windowSize = useWindowSize();

  console.log("#### windowSize", windowSize);

  return (
    <div className="slideshow-container">
      <select
        name="pokemon"
        id="pokemon"
        title="Select a Pokemon"
        className="pokemon-select"
        onChange={(e) => setSelectedPokemonIndex(Number(e.target.value))}
      >
        {pokemon.map((pokemon, index) => (
          <option key={pokemon.name} value={index}>
            {pokemon.name}
          </option>
        ))}
      </select>

      <div className="pokemon-container">
        <div className="pokemon-inner-container">
          <img
            src={pokemon[selectedPokemonIndex].image}
            alt={pokemon[selectedPokemonIndex].name}
          />

          <h2>{pokemon[selectedPokemonIndex].name}</h2>

          <p>{pokemon[selectedPokemonIndex].description}</p>
        </div>
      </div>

      <div className="button-container">
        <button
          type="button"
          disabled={selectedPokemonIndex === 0}
          onClick={() => setSelectedPokemonIndex(selectedPokemonIndex - 1)}
        >
          Previous
        </button>

        <button
          type="button"
          disabled={selectedPokemonIndex === pokemon.length - 1}
          onClick={() => setSelectedPokemonIndex(selectedPokemonIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardComponent;

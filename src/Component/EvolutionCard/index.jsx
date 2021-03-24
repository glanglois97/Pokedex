import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const EvolutionCard = ({ pokemonName, selected }) => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    pokemonName &&
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response =>
        response.json().then(pokemon => {
          setPokemon(pokemon);
        })
      );
  }, [pokemonName]);
  return (
    <div className={`evolution-card ${selected ? "selected" : ""}`}>
      <Link className="link" to={`${pokemon?.name}`}>
        <h4 className="evolution-name">{pokemon?.name?.toUpperCase()}</h4>
        <img
          className="evolution-pokemon-sprite"
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        />
      </Link>
    </div>
  );
};
export default EvolutionCard;

import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Card = ({ name }) => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response =>
      response.json().then(pokemon => {
        setPokemon(pokemon);
      })
    );
  }, [name]);
  return (
    <div className="card">
      <Link className="link" to={`${pokemon?.name}`}>
        <h2 className="pokemon-name">{pokemon?.name.toUpperCase()}</h2>
        <img
          className="pokemon-sprite"
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        />
      </Link>
    </div>
  );
};
export default Card;

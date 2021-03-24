import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Evolution from "../EvolutionChain";
import { Link } from "react-router-dom";
import "./styles.css";

const Fiche = props => {
  const pokemonName = props.match.params.pokemonName;
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response =>
      response.json().then(pokemon => {
        setPokemon(pokemon);
      })
    );
  }, [pokemonName]);
  return (
    <div>
      <Header />
      <Link className="back" to="/">
        BACK
      </Link>
      <main className="main">
        <h1 className="main-title">{pokemon?.name.toUpperCase()}</h1>
        <img
          className="main-pokemon-sprite"
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        />
        <div className="types">
          <h3 className="type">TYPES:</h3>
          {pokemon?.types?.map(type => (
            <h3 key={`${type?.type?.name}`} className="type">
              {type?.type?.name.toUpperCase()}
            </h3>
          ))}
        </div>
        <div className="stats">
          <h2 className="stats-title">STATS:</h2>
          {pokemon?.stats?.map(stat => (
            <div key={`${stat?.stat?.name}`} className="stat">
              <h4 className="stat-name">{stat?.stat?.name.toUpperCase()}</h4>
              <h4 className="stat-value">{stat?.base_stat}</h4>
            </div>
          ))}
        </div>
      </main>
      {pokemon?.species?.url && (
        <Evolution name={pokemon?.name} species={pokemon?.species?.url} />
      )}
      <Footer />
    </div>
  );
};

export default Fiche;

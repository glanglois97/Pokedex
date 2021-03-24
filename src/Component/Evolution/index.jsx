import React, { useState, useEffect } from "react";
import "./styles.css";
import EvolutionCard from "../EvolutionCard";

const Evolution = ({ evolutionChain, name }) => {
  const [evolution, setEvolution] = useState();
  useEffect(() => {
    fetch(evolutionChain).then(response =>
      response.json().then(evolution => {
        setEvolution(evolution?.chain);
      })
    );
  }, [evolutionChain]);
  const evolutionsArray = [];
  let currentEvolution = evolution;
  do {
    evolutionsArray.push({
      pokemonName: currentEvolution?.species?.name
    });
    currentEvolution = currentEvolution?.["evolves_to"][0];
  } while (!!currentEvolution && currentEvolution.hasOwnProperty("evolves_to"));
  return (
    <div className="evolution-container">
      <h2 className="evolutions-title">EVOLUTIONS</h2>
      {evolutionsArray.map(evolution => {
        return (
          <EvolutionCard
            selected={evolution.pokemonName === name}
            key={`${evolution.pokemonName}`}
            pokemonName={evolution?.pokemonName}
          />
        );
      })}
    </div>
  );
};
export default Evolution;

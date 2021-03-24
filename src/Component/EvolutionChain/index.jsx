import React, { useState, useEffect } from "react";
import Evolution from "../Evolution";

const EvolutionChain = ({ species, name }) => {
  const [evolutionChain, setEvolutionChain] = useState();
  useEffect(() => {
    fetch(species).then(response =>
      response.json().then(specie => {
        setEvolutionChain(specie?.evolution_chain?.url);
      })
    );
  }, [species]);
  return (
    <section>
      {evolutionChain && (
        <Evolution name={name} evolutionChain={evolutionChain} />
      )}
    </section>
  );
};
export default EvolutionChain;

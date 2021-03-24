import React from "react";
import Card from "../Card";
import Pagination from "../Pagination";
import usePokemonsProvider from "../../Provider/pokemons";
import "./styles.css";

const List = () => {
  const context = usePokemonsProvider();
  const { pokemons } = context;

  return (
    <div className="list">
      <Pagination />
      {pokemons?.map(pokemon => {
        return <Card key={`${pokemon?.name}`} name={pokemon?.name} />;
      })}
      <Pagination />
    </div>
  );
};

export default List;

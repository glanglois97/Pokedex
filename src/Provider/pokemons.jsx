import React, { createContext, useContext, useState, useEffect } from "react";

const PokemonsContext = createContext({});

export const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState();
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [nbrPages, setNbrPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const definePage = direction => {
    let url;
    switch (direction) {
      case "next":
        setUrl(next);
        setCurrentPage(currentPage + 1);
        break;
      case "previous":
        setUrl(previous);
        setCurrentPage(currentPage - 1);
        break;
      case "lastPage":
        setUrl(
          `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(nbrPages - 1) *
            20}`
        );
        setCurrentPage(nbrPages);
        break;
      default:
        setUrl("https://pokeapi.co/api/v2/pokemon?limit=20");
        setCurrentPage(1);
    }
    return url;
  };
  useEffect(() => {
    fetch(url).then(response => {
      return response.json().then(pokemons => {
        setPokemons(pokemons.results);
        setNext(pokemons.next);
        setPrevious(pokemons.previous);
        setNbrPages(Math.ceil(pokemons.count / 20));
      });
    });
  }, [url]);
  return (
    <PokemonsContext.Provider
      value={{ pokemons, definePage, nbrPages, currentPage }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

const usePokemonsProvider = () => useContext(PokemonsContext);
export default usePokemonsProvider;

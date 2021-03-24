import React from "react";
import usePokemonsProvider from "../../Provider/pokemons";
import "./styles.css";

const Pagination = () => {
  const context = usePokemonsProvider();
  const { currentPage, definePage, nbrPages } = context;
  return (
    <div className="pagination">
      {currentPage >= 2 && (
        <button onClick={() => definePage("firstPage")}>1</button>
      )}
      {currentPage > 2 && (
        <button onClick={() => definePage("previous")}>
          {currentPage - 1}
        </button>
      )}
      <button className="currentPage">{currentPage}</button>
      {currentPage < nbrPages - 1 && (
        <button onClick={() => definePage("next")}>{currentPage + 1}</button>
      )}
      {currentPage <= nbrPages - 1 && (
        <button onClick={() => definePage("lastPage")}>{nbrPages}</button>
      )}
    </div>
  );
};
export default Pagination;

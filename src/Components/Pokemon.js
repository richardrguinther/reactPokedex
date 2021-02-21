import React from "react";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="card">
      <img
        className="card-image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="card-title">{pokemon.name}</p>
    </div>
  );
};

export default Pokemon;

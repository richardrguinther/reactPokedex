import React from "react";

const Pokemon = ({ pokemon }) => {
  // let {type} = pokemon.types[0].type.name;
  const { type } = pokemon.types[0];

  return (
    <div className={`card ${type.name}`}>
      <img
        className="card-image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="card-title">{pokemon.name}</p>
      <p className="card-subtitle">Type: {type.name}</p>
    </div>
  );
};

export default Pokemon;

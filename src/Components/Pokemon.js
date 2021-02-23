import React from "react";

const Pokemon = ({ pokemon }) => {
  // let {type} = pokemon.types[0].type.name;
  const { type } = pokemon.types[0];

  const capitalizeName = (name) => {
    return `${
      name.charAt(0).toUpperCase() + String.prototype.slice.call(name, 1)
    }`;
  };

  return (
    <div className={`card ${type.name}`}>
      <img
        className="card-image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="card-title">{pokemon.name}</p>
      <p className="card-subtitle">Type: {capitalizeName(type.name)}</p>
      <ul className="abilities">
        <li>Abilities:</li>
        {pokemon.abilities.map((ab) => {
          return <li className="card-subtitle">{ab.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;

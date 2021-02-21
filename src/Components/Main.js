import React from "react";
const Main = ({ pokemons, children }) => {
  return (
    <main>
      {children}
      {pokemons &&
        pokemons.map((pokemon) => {
          return <div>{pokemon}</div>;
        })}
    </main>
  );
};

export default Main;

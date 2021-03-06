import Header from "./Components/Header";
import "./App.css";
import React from "react";
import Main from "./Components/Main";
import Loading from "./Components/Loading";
import Pokemon from "./Components/Pokemon";
function App() {
  const [pokemons, setPokemons] = React.useState(Array(150).fill());
  const [loading, setLoading] = React.useState(true);
  const getPokemonURL = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const fetchPokemons = (id) =>
    fetch(getPokemonURL(id)).then((response) => response.json());

  const getPokemonInfo = async (promises) => {
    return await Promise.allSettled(promises)
      .then((response) =>
        response.filter((toFilter) => toFilter.status === "fulfilled")
      )
      .then((fetchedPromises) =>
        fetchedPromises.map((pokemonPromise) => pokemonPromise.value)
      );
  };

  React.useEffect(() => {
    const getPromises = () => {
      let promises = pokemons.map((_, index) => {
        return fetchPokemons(index + 1);
      });
      return promises;
    };

    getPokemonInfo(getPromises()).then((pokemonArray) => {
      console.log(pokemonArray[0]);
      setPokemons(pokemonArray);
      setLoading(false);
    });
  }, []); // We set an empty array of dependecies, so the code run only when the application is started

  return (
    <>
      <div className="Pokedex">
        <Header />
        <Main>
          {loading && <Loading />}
          {pokemons[0] !== undefined &&
            pokemons.map((pokemon) => (
              <Pokemon pokemon={pokemon} key={pokemon.id} />
            ))}
        </Main>
      </div>
    </>
  );
}

export default App;

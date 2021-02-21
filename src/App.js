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

  async function fetchPokemons(id) {
    return await fetch(getPokemonURL(id)).then((response) => response.json());
  }

  React.useEffect(() => {
    const getPromises = () => {
      let promises = pokemons.map((_, index) => {
        return fetchPokemons(index + 1);
      });
      return promises;
    };

    Promise.all(getPromises()).then((response) => {
      setPokemons(response);
      setLoading(false);
    });
  }, []);

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

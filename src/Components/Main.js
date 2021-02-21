import React from "react";
import Loading from "./Loading";

const Main = ({ pokemons }) => {
  return <main>{!pokemons && <Loading />}</main>;
};

export default Main;

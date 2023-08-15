import { useEffect, useState } from "react";
import PokeItem from "../PokeItem/PokeItem";
import { Link } from "react-router-dom";

const PokeList = () => { 

  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(data => setAllPokemon(data.results))
  }, [])
  return ( 
    <section>
      {allPokemon.map((pokemon) =>
      <PokeItem 
      key={pokemon.name}
      name={pokemon.name}
      url={pokemon.url}
      />)}
    </section>
  );
}

export default PokeList;
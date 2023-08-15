import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokeItem = (props) => {

  const [pokeDetails, setPokeDetails] = useState({});
  useEffect(() => {
    fetch(props.url)
    .then(res => res.json())
    .then(data => setPokeDetails(data))

  }, [])
  return ( 
    <article>
      <Link to={`/detail/${pokeDetails.id}`}>
            <img src={pokeDetails.sprites?.other["official-artwork"].front_default} alt="Pokemon Image" className="w-1 h-1"/>
            </Link>
      <div>
        <h1 className="text-red-800">{pokeDetails.name}</h1>
        <p>#{pokeDetails.id}</p>
      </div>
    </article>
  );
}

export default PokeItem ;
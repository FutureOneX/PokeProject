import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokeDetail = () => {
  const params = useParams()
  const pokeId = params.id
  const [details, setDetails] = useState({})


  useEffect (() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((response) => {
      if(!response.ok) {
        throw new Error("Error")
      }
      return response.json();
    })
    .then ((data) => setDetails(data))
    .catch((error) => console.log(error.message))
  }, [pokeId])
  if (!details.sprites) {
    return <p>Loading...</p>
  }

  return ( 
    <section>
      <h2>{details.name}</h2>
      <img src={details.sprites?.other["official-artwork"].front_default} alt="Pokemon Image" />
    </section>
  );
}

export default PokeDetail;
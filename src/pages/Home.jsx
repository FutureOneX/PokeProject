import { Link } from "react-router-dom";
import PokeList from "../components/PokeList/PokeList";

const Home = () => {

  
  return ( 
    <>
    <article>
        <div>
          <PokeList />
        </div>
      </article>
    </>
  );
}

export default Home;
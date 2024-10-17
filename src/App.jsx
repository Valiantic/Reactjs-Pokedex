import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './components/Pokedex'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import axios from 'axios'




function App() {

  // USE STATE DECLARATION
  const [pokemonData, setpokemonData] = useState([null]);
  const [error, seterror] = useState(null);


  // SEARCH POKEMON FUNCTION
  const searchPokemon = (name) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    .then((response) => {
      setpokemonData(response.data);
      seterror(null);
    })
    .catch((error) => {
      seterror('Pokemon not found');
      setpokemonData(null);
    })
  }


  return (
    <>
    <div className="app">
      <h1>Pokedex <CatchingPokemonIcon fontSize='large'/> </h1>
      <sub>By steven madali</sub>

      
    </div>
   
    </>
  )
}

export default App

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../assets/css/Pokedex.css'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';


const Pokedex = () => {
    // Use state 
    const [num, setnum] = useState();
    const [name, setname] = useState();
    const [move, setmove] = useState();
    const [type, settype] = useState();

    // Use effect 
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name);
            setmove(res.data.moves.length);
            console.log(res.data.name);
        }
        getData();
    })

  return (
    <div className='container'>
        <h1>POKEDEX <CatchingPokemonIcon fontSize='large'/> </h1>

        <input type="text" placeholder='Search Pokemon...' value={name} onChange={(event) => {
          setname(event.target.value);
        }}/>

        <h1>{name} number of moves is {move}</h1>


        {/* <h1>Pokemon ID No {num}</h1>
        <h1>{name}</h1>

        <h1>{name} number of moves is {move}</h1>

      <select name="" id="" value={num} onChange={(event) => {
        setnum(event.target.value);
      }}>

        <option value="1">1</option>   
        <option value="2">2</option>   
        <option value="3">3</option>   
        <option value="4">4</option>   
        <option value="5">5</option>   

      </select> */}

    </div>
  )
}

export default Pokedex

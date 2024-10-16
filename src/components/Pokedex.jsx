import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'

const Pokedex = () => {
    const [num, setnum] = useState();
    const [name, setname] = useState();
    const [move, setmove] = useState();


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
    <div>
        <h1>POKEDEX</h1>
        <h1>Pokemon ID No {num}</h1>
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

      </select>
    </div>
  )
}

export default Pokedex

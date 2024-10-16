import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './components/Pokedex'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Trainers = [ {
  name: 'Ash Ketchum',
  age: 10,
  hometown: 'Pallet Town',
  starter: 'Pikachu'
},
{
  name: 'Misty',
  age: 12,
  hometown: 'Cerulean City',
  starter: 'Starmie'
},
{
  name: 'Brock',
  age: 15,
  hometown: 'Pewter City',
  starter: 'Onix'
},
{
  name: 'Gary Oak',
  age: 10,
  hometown: 'Pallet Town',
  starter: 'Eevee'
}]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>Trainers Information  <CatchingPokemonIcon fontSize="large"/></h1>

    {/* USING ARRAY MAP */}
    <h1>
      {Trainers.map((trainer, index) => (
        <div key={index}>
          <h2>{trainer.name}</h2>
          <p>Age: {trainer.age}</p>
          <p>Hometown: {trainer.hometown}</p>
          <p>Starter: {trainer.starter}</p>
        </div>
      ))}
    </h1>

    {/* <Pokedex/> */}
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';


const Searchbar = () => {
  const [search, setsearch] = useState('');

//   HANDLE SEARCH
  const handleSearch = (event) => {
    setsearch(event.target.value);
  }

//  RESET INPUT AFTER SUBMITTING
    const resetInput = (event) => {
        event.preventDefault();
        onSearch(search);
        setsearch('');
    }


  return (
    <form onSubmit={resetInput}>
        <input type="text" placeholder='Search a Pokemon...' value={search} onChange={handleSearch}/>
        <button type='submit'>Search <CatchingPokemonIcon/> </button>
    </form>
  )
}

export default Searchbar

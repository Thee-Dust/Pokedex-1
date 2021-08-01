import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import fetchPokemonData  from '../../apiData/apiCalls';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import Caught from '../Caught/Caught';
import Home from '../Home/Home';
import './App.css';


const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [caughtPokemon, setCaughtPokemon] = useState([])
  const [error, setError] = useState('')

  const catchPokemon = (pokemonName) => {
    if(!caughtPokemon.includes(pokemonName)) {
      setCaughtPokemon([...caughtPokemon, pokemonName])
    } else {
      setCaughtPokemon(caughtPokemon.filter(poki => {
        return poki !== pokemonName
      }))
    }
  }
      
  useEffect(() => {
    const fetchPokemon = async () => {
      setError('')
      try {
        const fetchedPokemon = await fetchPokemonData('/?limit=151')
        setPokemons(fetchedPokemon.results)
      } catch (e) {
        setError('Request failed')
      }
    }
    fetchPokemon()
  }, [])

  return (
    <main>
      <Switch>
        <Route exact path="/" >
          <Home
          pokemons={pokemons}
          caught={caughtPokemon} 
          favorite={catchPokemon} 
          error={error} />
        </Route>
      
        <Route path='/caught' 
          component={Caught} 
          pokemons={pokemons} 
          caught={caughtPokemon} 
          favorite={catchPokemon} 
          error={error}
          />
          
        <Route path="/:id"
          render={({ match }) => {
          const id = match.params.id
          return <PokemonDetails
          id={id}  
          caught={caughtPokemon} 
          favorite={catchPokemon} />
        }}/>
      </Switch>
    </main>
  )
}

export default App;

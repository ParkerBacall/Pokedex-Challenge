import React from 'react';
import '../App.css';
import Pokemon from "./Pokemon"


export default function PokemonList({pokemon}) {
    
    const showPokemon = pokemon.map(pokemonData =>{
        return  <Pokemon pokemon={pokemonData}/>
    })

    return (
        <div className="pokemonList">
           {showPokemon}
        </div>
    )
};

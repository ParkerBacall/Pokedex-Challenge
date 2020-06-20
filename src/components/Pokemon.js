import React from 'react'
import TypeList from './TypeList'

export default function Pokemon({pokemon}) {
    return (
        <div className='pokeCard'>
            <img src={pokemon.img}></img>
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.num}</h3>
            <TypeList types={pokemon.type}/>
            <p>weakness: {pokemon.weaknesses}</p>
        </div>
    )
}

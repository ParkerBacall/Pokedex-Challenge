import React from 'react'
import TypeList from './TypeList'
import WeaknessList from './WeaknessList'

export default function Pokemon({pokemon}) {
    return (
        <div className='pokeCard'>
            <img src={pokemon.img}></img>
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.num}</h3>
            <TypeList types={pokemon.type}/>
            <WeaknessList weaknesses={pokemon.weaknesses}/>
        </div>
    )
}

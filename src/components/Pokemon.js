import React from 'react'

export default function Pokemon({pokemon}) {
    return (
        <div className='pokeCard'>
            <h1>{pokemon.name}</h1>
            <h2>{pokemon.num}</h2>
            <p>type: {pokemon.type}</p>
            <p>weakness: {pokemon.weaknesses}</p>
        </div>
    )
}

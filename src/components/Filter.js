import React from 'react'


export default function Filter({pokemon, updateType}) {

    const pokemonList = pokemon.map(pokemonData => {
        return pokemonData.type
    })

    const onlyUnique = (value, index, self) => { 
        return self.indexOf(value) === index;
    }
    
    const uniq = (array) => {
        return array.filter(onlyUnique)
    } 


   const typeArray = [].concat.apply([], pokemonList)

    const uniqueTypeArray = uniq(typeArray)

    const typeOptions = uniqueTypeArray.map(type=> {
        return <option>{type}</option>
    })

    const handleChange = event => {
        updateType(event.target.value)
    }

    return (
        <div className="filterDiv">
            <form >
                <select className="filter" onChange={handleChange}>
                    {typeOptions}
                </select>
            </form>
        </div>
    )
}

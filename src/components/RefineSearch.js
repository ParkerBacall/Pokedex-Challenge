import React from 'react'


export default function RefineSearch({pokemon, updateSecondaryType}) {

    const pokemonList = pokemon.map(pokemonData => {
        return pokemonData.type
    })

    const onlyUnique = (value, index, self) => { 
        return self.indexOf(value) === index;
    }
    
    const uniq = (array) => {
        return array.filter(onlyUnique)
    } 

    const flatten = (array) => {
        return [].concat.apply([], array)
    }


   const typeArray = flatten(pokemonList)

    const uniqueTypeArray = uniq(typeArray)

    const typeOptions = uniqueTypeArray.map(type=> {
        return <option>{type}</option>
    })

    const handleChange = event => {
        updateSecondaryType(event.target.value)
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

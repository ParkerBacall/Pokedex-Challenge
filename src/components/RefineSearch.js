import React from 'react'


export default function RefineSearch({pokemon, updateSecondaryType}) {

    const pokemonList = pokemon.map(pokemonData => {
        return pokemonData.type
    })

    const onlyUnique = (value, index, self) => { 
        return self.indexOf(value) === index;
    }
    


   const typeArray = [].concat.apply([], pokemonList)

    const uniqueTypeArray = typeArray.filter(onlyUnique)

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

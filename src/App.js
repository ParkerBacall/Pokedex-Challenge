import React, {Component} from 'react';
import './App.css';
import PokemonList from "./components/PokemonList"
import SearchBar from "./components/SearchBar"
import Filter from "./components/Filter"
import RefineSearch from "./components/RefineSearch"
import Clear from "./components/Clear"


class App extends Component {

  state = {
    pokemon: [],
    searchTerm: "",
    types: ['Grass', 'Poison', 'Fire', 'Flying', 'Water', 'Bug', 'Normal', 'Electric', 'Ground', 'Fighting', 'Psychic', 'Rock', 'Ice', 'Dragon', 'Ghost'],
    secondary_type: ['Grass', 'Poison', 'Fire', 'Flying', 'Water', 'Bug', 'Normal', 'Electric', 'Ground', 'Fighting', 'Psychic', 'Rock', 'Ice', 'Dragon', 'Ghost'],
  }
  
  componentDidMount(){ 
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(response => response.json())
    .then(response => this.setState({
      pokemon: response.pokemon
    }))
  }

  uniq = (array) => {
      return array.filter(this.onlyUnique)
  } 

  flatten = (array) => {
      return [].concat.apply([], array)
  }

  updateSearchTerm = term =>{
    this.setState({
      searchTerm: term
    })
    this.filterPokemon(term)
  }

  filterPokemon = () => {
    const {pokemon, searchTerm} = this.state
    return pokemon.filter(pokemonData => {
      return pokemonData.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    })
  }

   onlyUnique = (value, index, self) => { 
    return self.indexOf(value) === index;
}

    updateType = async (type) => {
    await this.setState({
      types: []
    })
    this.setState({
      types: [...this.state.types, type]
    })
    this.filterType()
  }

  filterType = () => {
    let pokeArray = [] 
    const {pokemon, types, secondary_type} = this.state
    for (let i=0; i<types.length; i++){
      for (let j=0; j<secondary_type.length; j++)
     pokeArray = [...pokeArray, pokemon.filter(pokemonData => {
      return (pokemonData.type.includes(types[i]) && pokemonData.type.includes(secondary_type[j]) )
    })]
  }

  const collapsedPokeArray = this.flatten(pokeArray)
  const uniquePokeArray = this.uniq(collapsedPokeArray)

  return uniquePokeArray
  }

  updateSecondaryType = async (type) => {
    await this.setState({
      secondary_type: []
    })
    this.setState({
      secondary_type: [...this.state.secondary_type, type]
    })
  }

clearFilter = () => {
  this.setState({
    types: ['Grass', 'Poison', 'Fire', 'Flying', 'Water', 'Bug', 'Normal', 'Electric', 'Ground', 'Fighting', 'Psychic', 'Rock', 'Ice', 'Dragon', 'Ghost'],
    secondary_type: ['Grass', 'Poison', 'Fire', 'Flying', 'Water', 'Bug', 'Normal', 'Electric', 'Ground', 'Fighting', 'Psychic', 'Rock', 'Ice', 'Dragon', 'Ghost'],
  })
}

finalFilter = () => {
  return this.filterType().filter(pokemon => {
    return this.filterPokemon().includes(pokemon)
  })
}

sortByNumber = (pokemonData) => {
  return pokemonData.sort(function(a,b) {return a.num - b.num})
}

  render(){
    return (
      <div className="app">
        <div className='title-container'>
        <img className="title-img" src="./pokedex.png"></img>
        </div>
        <div className="search">
        <SearchBar updateSearchTerm={this.updateSearchTerm} 
        searchTerm={this.state.searchTerm}
        pokemon={this.filterPokemon()}
        />
        <Filter updateType={this.updateType} pokemon={this.state.pokemon}/>
        <RefineSearch updateSecondaryType={this.updateSecondaryType} pokemon={this.state.pokemon}/>
        <Clear clearFilter={this.clearFilter}/>
        </div>
        <PokemonList pokemon={this.sortByNumber(this.finalFilter())}/>
      </div>
    );
  }
}


export default App;

import React, {Component} from 'react';
import './App.css';
import PokemonList from "./components/PokemonList"
import SearchBar from "./components/SearchBar"
import Filter from "./components/Filter"


class App extends Component {

  state = {
    pokemon: [],
    searchTerm: "",
    type: ""
  }
  
  componentDidMount(){ 
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(response => response.json())
    .then(response => this.setState({
      pokemon: response.pokemon
    }))
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

  updateType = type =>{
    this.setState({
      type: type
    })
    this.filterType(type)
  }

  filterType = () => {
    const {pokemon, type} = this.state
    return pokemon.filter(pokemonData => {
      return pokemonData.type.includes(type)
    })
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
        <Filter updateType={this.updateType} pokemon={this.filterPokemon()}/>
        </div>
        <PokemonList pokemon={this.filterType()}/>
      </div>
    );
  }
}


export default App;

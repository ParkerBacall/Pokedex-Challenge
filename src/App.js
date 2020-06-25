import React, {Component} from 'react';
import './App.css';
import PokemonList from "./components/PokemonList"
import SearchBar from "./components/SearchBar"

class App extends Component {

  state = {
    pokemon: [],
    searchTerm: ""
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

  render(){
    return (
      <div className="app">
        <div className='title-container'>
        <img className="title-img" src="./pokedex.png"></img>
        </div>
        <div className="search">
        <SearchBar updateSearchTerm={this.updateSearchTerm} searchTerm={this.state.searchTerm}/>
        </div>
        <PokemonList pokemon={this.filterPokemon()}/>
      </div>
    );
  }
}


export default App;

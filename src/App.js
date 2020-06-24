import React, {Component} from 'react';
import './App.css';
import PokemonList from "./components/PokemonList"
import SearchBar from "./components/SearchBar"

class App extends Component {

  state = {
    pokemon: []
  }
  
  componentDidMount(){ 
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(response => response.json())
    .then(response => this.setState({
      pokemon: response.pokemon
    }))
  }

  render(){
    return (
      <div className="app">
        <div className='title-container'>
        <img className="title-img" src="./pokedex.png"></img>
        </div>
        <div className="search">
        <SearchBar/>
        </div>
        <PokemonList pokemon={this.state.pokemon}/>
      </div>
    );
  }
}


export default App;

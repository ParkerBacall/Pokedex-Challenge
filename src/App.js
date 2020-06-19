import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  componentDidMount(){ 
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(response => response.json())
    .then(console.log)
  }

  render(){
    return (
      <div className="App">
        <div className='title-container'>
        <img className="title-img" src="./pokedex.jpg"></img>
        </div>
      </div>
    );
  }
}


export default App;

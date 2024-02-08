import './App.css';
import Title from './components/Title';
import PokemonCard from './components/PokemonCard';
import pokemonsData from './data/pokemons.json';
import { useState } from 'react';

const App = () => {
  const [pokemons, setPokemons] = useState(pokemonsData);

  const handlePokemonClick = (id) => {
    setPokemons(
      pokemons.map((pokemon) => {
        if (pokemon.id === id) {
          return { ...pokemon, selected: !pokemon.selected };
        }
        return pokemon;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <main>
        <div className="App-pokemons">
          {pokemons.map((pokemon) => (
            // <PokemonCard name={pokemon.name} image={pokemon.image} />
            <PokemonCard
              key={pokemon.id}
              {...pokemon}
              onPokemonClick={() => handlePokemonClick(pokemon.id)}
            />
          ))}
        </div>
        <div className="App-selection">
          <h6>Ma sélection</h6>
          {pokemons
            .filter((pokemon) => pokemon.selected)
            .map((pokemon) => (
              <img alt="" src={pokemon.image} width={85} height={85} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default App;

import './App.css';
import Title from './components/Title';
import PokemonCard from './components/PokemonCard';
import pokemonsData from './data/pokemons.json';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <main>
        <div className="App-pokemons">
          {pokemonsData.map((pokemon) => (
            // <PokemonCard name={pokemon.name} image={pokemon.image} />
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;

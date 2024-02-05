import './App.css';
import Title from './components/Title';
import PokemonCard from './components/PokemonCard';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <main>
        <div className="App-pokemons">
          <PokemonCard />
        </div>
      </main>
    </div>
  );
};

export default App;

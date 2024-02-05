import './PokemonCard.css';

const apiTypes = [
  {
    name: 'Poison',
    image: 'https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png',
  },
  {
    name: 'Plante',
    image: 'https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png',
  },
];

const PokemonCard = () => {
  return (
    <div className="PokemonCard" onClick={() => console.log('POKEMON CARD')}>
      <img
        className="PokemonCard-image"
        alt=""
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      />
      <h6 className="PokemonCard-name">Bulbizarre</h6>
      <div className="PokemonCard-types">
        {apiTypes.map((type) => (
          <div key={type.name} className="PokemonCard-type">
            <img alt="" src={type.image} />
            <span>{type.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PokemonCard;

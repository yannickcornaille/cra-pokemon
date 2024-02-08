import './PokemonForm.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const PokemonForm = ({ onSearchSubmit = () => {} }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Rechercher un Pokémon</legend>
        <label htmlFor="name">Nom :</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button className="PokemonForm-submit" type="submit">
          Envoyer
        </button>
      </fieldset>
    </form>
  );
};

PokemonForm.propTypes = {
  onSearchSubmit: PropTypes.func,
};

export default PokemonForm;

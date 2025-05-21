import React from 'react';
import './PokemonDetails.css'
import { Link } from "react-router-dom";

const PokemonDetails = ({ pokemon }) => {

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const renderTypes = () => {
    return pokemon.types.map((type, index) => (
      <span key={type.type.name} className="type">
        {type.type.korean_name}
        {index < pokemon.types.length - 1 ? ', ' : ''}
      </span>
    ));
  };


  const renderAbilities = () => {
    return pokemon.abilities.map((ability, index) => (
      <span key={ability.ability.name} className='ability'>
        {ability.ability.korean_name}
        {index < pokemon.abilities.length - 1 ? ', ' : ''}
      </span>
    ));
  };


  const renderMoves = () => {
    return pokemon.moves.map((move) => <li key={move.move.name}>{move.move.korean_name}</li>);
  };

  return (
    <div className='pokemon-details'>
      <h2>{pokemon.korean_name} (#{pokemon.id})</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
      <p>이름: {pokemon.korean_name}</p>
      <p>키: {pokemon.height}</p>
      <p>무게: {pokemon.weight}</p>
      <p>속성: {renderTypes()}</p>
      <p>특성: {renderAbilities()}</p>
      <Link to="/pokemon/dex">
        <button>뒤로가기</button>
      </Link>
    </div>
  );
};

export default PokemonDetails;
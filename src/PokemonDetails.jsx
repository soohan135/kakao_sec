import React from 'react';
import { Link } from "react-router-dom";
import { Button, Div_Details, Img_Details, H2_Details, P_Details, Type_and_Ability_Details } from './style_components';

const PokemonDetails = ({ pokemon }) => {

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const renderTypes = () => {
    return pokemon.types.map((type, index) => (
      <Type_and_Ability_Details key={type.type.name}>
        {type.type.korean_name}
        {index < pokemon.types.length - 1 ? ', ' : ''}
      </Type_and_Ability_Details>
    ));
  };


  const renderAbilities = () => {
    return pokemon.abilities.map((ability, index) => (
      <Type_and_Ability_Details key={ability.ability.name}>
        {ability.ability.korean_name}
        {index < pokemon.abilities.length - 1 ? ', ' : ''}
      </Type_and_Ability_Details>
    ));
  };


  const renderMoves = () => {
    return pokemon.moves.map((move) => <li key={move.move.name}>{move.move.korean_name}</li>);
  };

  return (
    <Div_Details>
      <H2_Details>{pokemon.korean_name} (#{pokemon.id})</H2_Details>
      <Img_Details src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
      <P_Details>이름: {pokemon.korean_name}</P_Details>
      <P_Details>키: {pokemon.height}</P_Details>
      <P_Details>무게: {pokemon.weight}</P_Details>
      <P_Details>속성: {renderTypes()}</P_Details>
      <P_Details>특성: {renderAbilities()}</P_Details>
      <Link to="/pokemon/dex">
        <Button>뒤로가기</Button>
      </Link>
    </Div_Details>
  );
};

export default PokemonDetails;
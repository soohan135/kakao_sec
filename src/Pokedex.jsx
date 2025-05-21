import React, { useState, useEffect } from "react";
import axios from "axios";
import "./pokedex.css";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

const getStoredDex = () => {
  const stored = localStorage.getItem("poketmonDex");
  return stored ? JSON.parse(stored) : [];
};


const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [poketmonDex, setpoketmonDex] = useState(getStoredDex);
  const [pokedexCount, setpokedexCount] = useState(0);
  const pokemonPerPage = 76;
  const totalPokemon = 151;

  useEffect(() => {
    const fetchData = async () => {
      const allPokemonData = [];
      for (let i = 1; i <= Math.min(currentPage * pokemonPerPage, totalPokemon); i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
        const koreanName = speciesResponse.data.names.find((name) => name.language.name === "ko");
        allPokemonData.push({ ...response.data, korean_name: koreanName.name });
      }
      setPokemonData(allPokemonData);
    };

    fetchData();
  }, [currentPage]);


  useEffect(() => {
    localStorage.setItem("poketmonDex", JSON.stringify(poketmonDex));
  }, [poketmonDex]);

  const handleAdd = (pokemon) => {
    const isAlreadyAdded = poketmonDex.some(p => p.id === pokemon.id);

    if (isAlreadyAdded) {
      alert(`${pokemon.korean_name}은(는) 이미 추가된 포켓몬입니다.`);
      return;
    }
    if (pokedexCount < 5) {
      setpokedexCount(prev => prev + 1);
      const updated = [...poketmonDex, pokemon];
      setpoketmonDex(updated);
      localStorage.setItem("poketmonDex", JSON.stringify(updated));
    } else {
      alert(`포켓몬은 최대 6개까지 선택 할 수 있습니다.`);
    }
  };

  const handleRemove = (targetId) => {
    const updated = poketmonDex.filter(pokemon => pokemon.id !== targetId);
    setpoketmonDex(updated);
    setpokedexCount(prev => prev - 1);
    localStorage.setItem("poketmonDex", JSON.stringify(updated));
  };

  const fetchMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className="pokedex">
        {poketmonDex.map((pokemon) => (
          <div key={pokemon.id} className="pokemon">
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
              <p>{pokemon.korean_name}</p>
              <p>도감번호: {pokemon.id}</p>
            </Link>
            <button onClick={() => handleRemove(pokemon.id)}>삭제</button>
          </div>
        ))}
      </div>
      <InfiniteScroll
        dataLength={pokemonData.length}
        next={fetchMoreData}
        hasMore={currentPage * pokemonPerPage < totalPokemon}
        loader={<h4>Loading...</h4>}
        endMessage={<p>All Pokémon have been loaded</p>}
        className="container"
      >
        {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className="pokemon">
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
              <p>{pokemon.korean_name}</p>
              <p>도감번호: {pokemon.id}</p>
            </Link>
            <button onClick={() => handleAdd(pokemon)}>추가</button>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Pokedex;
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import "./pokedex.css";


const PokemonList = () => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allPokemonData = [];
            for (let i = 1; i <= 151; i++) {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
                const koreanName = speciesResponse.data.names.find((name) => name.language.name === "ko");
                allPokemonData.push({ ...response.data, korean_name: koreanName.name });
            }
            setPokemonData(allPokemonData);
        };

        fetchData();
    }, []);

    return (
        <PokemonCard pokemonList={pokemonData}/>
    );
};

export default PokemonList;

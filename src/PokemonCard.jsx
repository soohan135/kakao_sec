import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { notifyStorageChange } from "./pokedexStorage";
import "./pokedex.css";

const getStoredDex = () => {
    const stored = localStorage.getItem("poketmonDex");
    return stored ? JSON.parse(stored) : [];
};

const PokemonCard = ({ pokemonList }) => {

    const [poketmonDex, setPoketmonDex] = useState(getStoredDex);

    useEffect(() => {
        const handleStorageChange = () => {
            const updated = getStoredDex();
            setPoketmonDex(updated);
        };

        window.addEventListener("poketmonDexChanged", handleStorageChange);
        return () => window.removeEventListener("poketmonDexChanged", handleStorageChange);
    }, []);

    const handleAdd = (pokemon) => {
        const current = getStoredDex();
        const isAlreadyAdded = current.some(p => p.id === pokemon.id);
        if (isAlreadyAdded) {
            alert(`${pokemon.korean_name}은(는) 이미 추가된 포켓몬입니다.`);
            return;
        }

        if (poketmonDex.length >= 6) {
            alert("포켓몬은 최대 6개까지 선택할 수 있습니다.");
            return;
        }

        const updated = [...poketmonDex, pokemon];
        localStorage.setItem("poketmonDex", JSON.stringify(updated));
        notifyStorageChange();
    };

    return (
        <div className="container">
            {pokemonList.map((pokemon) => (
                <div key={pokemon.id} className="pokemon">
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
                        <p>{pokemon.korean_name}</p>
                        <p>도감번호: {pokemon.id}</p>
                    </Link>
                    <button onClick={() => handleAdd(pokemon)}>추가</button>
                </div>
            ))}
        </div>

    );
};

export default PokemonCard;

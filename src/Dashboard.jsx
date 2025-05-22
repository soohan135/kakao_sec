import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { notifyStorageChange } from "./pokedexStorage";
import { Button, Div_pokedex, Div_Pokemon } from "./style_components";

const Dashboard = () => {
    const [poketmonDex, setpoketmonDex] = useState([]);

    useEffect(() => {
        const loadFromStorage = () => {
            const stored = localStorage.getItem("poketmonDex");
            setpoketmonDex(stored ? JSON.parse(stored) : []);
        };

        loadFromStorage();
        window.addEventListener("poketmonDexChanged", loadFromStorage);

        return () => {
            window.removeEventListener("poketmonDexChanged", loadFromStorage);
        };
    }, []);

    const handleRemove = (targetId) => {
        const updated = poketmonDex.filter(pokemon => pokemon.id !== targetId);
        localStorage.setItem("poketmonDex", JSON.stringify(updated));
        setpoketmonDex(updated);
        notifyStorageChange()
    };

    return (
        <Div_pokedex>
            {poketmonDex.map(pokemon => (
                <Div_Pokemon key={pokemon.id}>
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
                        <p>{pokemon.korean_name}</p>
                        <p>도감번호: {pokemon.id}</p>
                    </Link>
                    <Button onClick={() => handleRemove(pokemon.id)}>삭제</Button>
                </Div_Pokemon>
            ))}
        </Div_pokedex>
    );
};

export default Dashboard;

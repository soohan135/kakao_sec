import React, { useEffect, useState } from "react";
import { notifyStorageChange } from "./pokedexStorage";
import "./pokedex.css";

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
        <div className="pokedex">
            {poketmonDex.map(pokemon => (
                <div key={pokemon.id} className="pokemon">
                    <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
                    <p>{pokemon.korean_name}</p>
                    <p>도감번호: {pokemon.id}</p>
                    <button onClick={() => handleRemove(pokemon.id)}>삭제</button>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;

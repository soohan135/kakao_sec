import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonDetailsPage from "./PokemonDetailsPage";
import Home from "./Home";
import Pokedex from "./Pokedex"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/dex" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
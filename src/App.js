import './App.css';

import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Commons/Header";
import {PokemonCard} from "./PokemonDetails/PokemonCard";
import {PokemonList} from "./Root/PokemonList";


function App() {
  const [pokemon, setPokemon] = useState("");
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
        <Header language={language} setLanguage={setLanguage}/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonList pokemon={pokemon} setPokemon={setPokemon} language={language}/>} />
                <Route path="PokemonDetails/:pokemonId" element={<PokemonCard language={language}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

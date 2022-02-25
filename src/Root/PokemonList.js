import {Dialog, Grid, Modal} from "@mui/material";
import PokemonsCard from "./PokemonsCard";
import SearchBar from "./SearchBar";
import {Outlet} from "react-router-dom";

export function PokemonList({pokemon, setPokemon, language}) {
    return (
        <div>
            <SearchBar pokemonSearch={pokemon} setPokemonSearch={setPokemon} />
            <Grid container rowSpacing={3} columnSpacing={3}>
                <PokemonsCard pokemonSearched={pokemon} language={language}/>
            </Grid>
            <Outlet />
        </div>
    )
}
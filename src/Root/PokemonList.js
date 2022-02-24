import {Grid} from "@mui/material";
import PokemonsCard from "./PokemonsCard";
import SearchBar from "./SearchBar";

export function PokemonList({pokemon, setPokemon, language}) {
    return (
        <div>
            <SearchBar pokemonSearch={pokemon} setPokemonSearch={setPokemon} />
            <Grid container rowSpacing={3} columnSpacing={3}>
                <PokemonsCard pokemonSearched={pokemon} language={language}/>
            </Grid>
        </div>
    )
}
import {Link, useParams} from "react-router-dom";
import pokemons from "../pokemons.json";
import types from "../types.json";
import {Card, CardActions, CardContent, Grid, Typography} from "@mui/material";

function pad(iNumber, iSize) {
    iNumber = iNumber.toString();
    while (iNumber.length < iSize) iNumber = "0" + iNumber;
    return iNumber;
}

export function PokemonCard({language}) {
    const {pokemonId} = useParams();
    let pokemon = pokemons[pokemonId - 1]

    return (
        <Grid item xs={10} sm={6} md={12}>
            <Card key={pokemon.id}>
                <CardActions>
                    <Typography fontSize={14}>N°{pad(pokemon.id, 3)}</Typography>
                </CardActions>
                <CardContent>
                    <h2>{pokemon.names[language]}</h2>
                    <img src={pokemon.image} alt={pokemon.name}/>
                    <h3>Height : {pokemon.height}, Weight : {pokemon.weight}</h3>
                    <p>Moves: {pokemon.moves.map(move => {
                        return move + ',\n'
                    })}</p>
                </CardContent>
                <CardActions style={{display: "flex", justifyContent: "center"}} >
                    {pokemon.types.map(type => {
                        return <h2 className={`type ${type}`}>{types[type][language]}</h2>
                    })}
                </CardActions>
            </Card>
        </Grid>
    )
}
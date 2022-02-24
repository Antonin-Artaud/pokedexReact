import pokemons from "../pokemons.json";
import types from "../types.json";
import {Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function PokemonsCard({pokemonSearched, language}) {

    let html;

    html = pokemons.filter(t => t.names[language].toLowerCase().includes(pokemonSearched)).map(pokemon => {
        return (<Grid item xs={10} sm={6} md={2}>
            <Link style={{ textDecoration: 'none' }} to={"PokemonDetails/"+pokemon.id}>
                <Card key={pokemon.id}>
                    <CardActions>
                        <Typography fontSize={14}>N°{pad(pokemon.id, 3)}</Typography>
                    </CardActions>
                    <CardContent>
                        <h2>{pokemon.names[language]}</h2>
                        <img src={pokemon.image} alt={pokemon.name}/>
                    </CardContent>
                    <CardActions style={{display: "flex", justifyContent: "center"}} >
                        {pokemon.types.map(type => {
                            return <h2 className={`type ${type}`}>{types[type][language]}</h2>
                        })}
                    </CardActions>
                </Card>
            </Link>
        </Grid>)
    })

    return html;
}

function pad(number, size) {
    number = number.toString();
    while (number.length < size)
        number = "0" + number;
    return number;
}
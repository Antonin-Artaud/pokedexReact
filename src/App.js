import logo from './logo.svg';
import pokemons from './pokemons.json';
import './App.css';
import {
    Card,
    CardActions,
    CardContent,
    FormControl,
    Grid,
    InputLabel, Menu, MenuItem,
    Select, Step,
    TextField,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";
import {useState} from "react";


function Header({language, setLanguage}) {
    return <div>
        <header style={{display: "flex", justifyContent: "space-between"}}>
            <img src={logo} alt="logo" height={60}/>
            <SelectLanguage language={language} setLanguage={setLanguage}/>
        </header>
    </div>
}

function pad(iNumber, iSize) {
    iNumber = iNumber.toString();
    while (iNumber.length < iSize) iNumber = "0" + iNumber;
    return iNumber;
}

function Pokedex({pokemonSearched, language}) {

    let html;

    html = pokemons.filter(t => t.names[language].toLowerCase().includes(pokemonSearched)).map(pokemon => {
        return (<Grid item xs={10} sm={6} md={2}>
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
                        return <h2 className={`type ${type}`}>{type}</h2>
                    })}
                </CardActions>
            </Card>
        </Grid>)
    })

    return html;
}

function SearchBar({setPokemonSearch, pokemonSearch}) {
    function handleNameChange(e) {
        const input = e.target;
        console.log(input.value)
        setPokemonSearch(input.value);
    }

    return <div>
        <TextField id="search" style={{backgroundColor: "white"}} placeholder={"Search pokemon !"} fullWidth type="search" value={pokemonSearch} onChange={handleNameChange} margin="normal" variant="outlined"/>
    </div>

}

function SelectLanguage({language, setLanguage}) {
    function handleNameChange(e) {
        const input = e.target;
        console.log(input.value)
        setLanguage(input.value);
    }

    return <FormControl>
        <Select style={{backgroundColor: "white"}} fullWidth={false} value={language} onChange={handleNameChange}>

            <MenuItem value={"zh-Hans"}>Chinese</MenuItem>
            <MenuItem value={"ja"}>Japanese</MenuItem>
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"it"}>Italian</MenuItem>
            <MenuItem value={"es"}>Spanish</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
            <MenuItem value={"zh-Hant"}>Chinese (Traditional)</MenuItem>
            <MenuItem value={"ko"}>Korean</MenuItem>
            <MenuItem value={"roomaji"}>Romaji</MenuItem>
            <MenuItem value={"ja-Hrkt"}>Japanese (Hiragana)</MenuItem>
        </Select>
    </FormControl>
}


SearchBar.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

function App() {
  const [pokemon, setPokemon] = useState("");
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
        <Header language={language} setLanguage={setLanguage}/>
        <SearchBar setPokemonSearch={setPokemon} pokemonSearch={pokemon}/>
        <Grid container rowSpacing={3} columnSpacing={3}>
            <Pokedex pokemonSearched={pokemon} language={language}/>
        </Grid>
    </div>
  );
}

export default App;

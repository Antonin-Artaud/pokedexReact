import {TextField} from "@mui/material";
import PropTypes from "prop-types";

SearchBar.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default function SearchBar({setPokemonSearch, pokemonSearch}) {
    function handleNameChange(e) {
        const input = e.target;
        console.log(input.value)
        setPokemonSearch(input.value);
    }

    return <div>
        <TextField id="search" style={{backgroundColor: "white"}} placeholder={"Search pokemon !"} fullWidth type="search" value={pokemonSearch} onChange={handleNameChange} margin="normal" variant="outlined"/>
    </div>

}
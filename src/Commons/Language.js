import {FormControl, MenuItem, Select} from "@mui/material";

export default function Language({language, setLanguage}) {
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
            <MenuItem value={"de"}>German</MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
            <MenuItem value={"zh-Hant"}>Chinese (Traditional)</MenuItem>
            <MenuItem value={"ko"}>Korean</MenuItem>
            <MenuItem value={"roomaji"}>Romaji</MenuItem>
            <MenuItem value={"ja-Hrkt"}>Japanese (Hiragana)</MenuItem>
        </Select>
    </FormControl>
}
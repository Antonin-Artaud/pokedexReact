import logo from "../logo.svg";
import Language from "./Language";
import {Link} from "@mui/material";

export default function Header({language, setLanguage}) {
    return <div>
        <header style={{display: "flex", justifyContent: "space-between"}}>
            <Link to={'/'}>
                <img src={logo} alt="logo" height={60}/>
            </Link>
            <Language language={language} setLanguage={setLanguage}/>
        </header>
    </div>
}
import { useContext } from "react";
import { DarkModeContext, getTheme } from "./App";

export default function Child() {

    const darkMode = useContext(DarkModeContext);

    return (
        <div style={getTheme(darkMode.value)}>

            <h3>Child</h3>
            <input 
                type="checkbox" 
                checked={darkMode.value}
                onChange={(evt)=>darkMode.setter(evt.target.checked)}/>
        </div>
    )
}
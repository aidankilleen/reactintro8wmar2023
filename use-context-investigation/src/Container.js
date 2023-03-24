import { useContext } from "react";
import { DarkModeContext, getTheme } from "./App";
import Child from "./Child";

export default function Container () {

    const darkMode = useContext(DarkModeContext);

    return (

        <div style={ getTheme(darkMode.value)}>
            <h1>Container</h1>

            <p>This is a container</p>
        

            <Child></Child>


            <Child></Child>
        </div>
    )
}
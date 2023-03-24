import { useEffect, useState } from "react"

export default function Box() {

    const [dimensions, setDimensions]=useState({width: 50, height: 50})
    const [colour, setColour]=useState("lightcoral");
    const [area, setArea] = useState(dimensions.width * dimensions.height);

    const styles = {
        border: "1px solid black",
        width: `${dimensions.width}px`, 
        height: `${dimensions.height}px`, 
        backgroundColor: colour
    }

    const onClick = () => {

        if (colour === 'lightcoral') {
            setColour('lightblue');
        } else {
            setColour('lightcoral');
        }
    }
    const calcArea = () => {
        console.log("calcArea called");
        // artifically slow down the function
        console.time();
        [...Array(10000000).keys()].reduce((p, c)=>p+c);
        console.timeEnd()
        return dimensions.width * dimensions.height
    }

    useEffect(()=>{
        setArea(calcArea())
    }, [dimensions]);

    return (
        <div class="box" style={styles} onClick={onClick}>

            <button onClick={() => {

                setDimensions(current => {
                    return {
                        width: current.width + 5, 
                        height: current.width + 5
                    }
                })
            }}>+</button>

            <span>Area: { area }</span>
        </div>
    )


}
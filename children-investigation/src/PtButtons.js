export default function Button({ children }) {


    return (
        <button>{ children }</button>
    )
}

export function StyledButton({ 
    text, 
    colour, 
    size, 
    ...props}) {

    const styles = {
        backgroundColor: props.disabled ? 'white' : colour, 
        fontSize: size === 'large' ? '20px' : '14px', 
        padding: size === 'large' ? '20px': '5px'
    }
    return (
        <button
            style={ styles } 
            {...props}   
            >
            { text }
        </button>
    )
}

export function LargeButton({...props}) {

    return (
        <StyledButton {...props} size="large"/>
    )
}

export function DangerButton({...props}) {

    props.colour = "red";

    return (
        <StyledButton {...props}/>
    )
}
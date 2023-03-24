
function applyExtraProperties(Component, extraProps) {

    const outerComponent = ({...props}) => {
        return <Component {...props} { ...extraProps }/>
    }
    return outerComponent;
}

export const ComposedBigButton = 
    applyExtraProperties(BasicButton, {
    size: 'large'
});

export const ComposedDangerButton = 
    applyExtraProperties(BasicButton, { colour: 'red'});

export const ComposedLargeDangerButton =
    applyExtraProperties(ComposedDangerButton, {size:'large'});



export default function BasicButton({text, size, colour, ...props}) {

    const styles = {
        backgroundColor: colour,
        padding: size === 'large' ? '20px': '5px', 
        fontSize: size === 'large' ? '2em': '1em'
    }
    return (
        <button style={ styles } {...props}>
            { text }
        </button>
    )
}
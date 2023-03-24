import { useState } from "react";

function PtAccordionPanel({item, onExpanded}) {

    // useState intitalisation only happens once !!!!
    //const [expanded, setExpanded] = useState(item.expanded);
    
    const onClick = () => {
        //setExpanded(current => !current);
        onExpanded(item);
    }
    return (
        <div className="accordion-item">
            <h2 onClick={ onClick }
                style={{ backgroundColor: item.expanded?'lightblue':'lightgreen'}}
            >{ item.title }</h2>
            { item.expanded && <p>{ item.text }</p> }
        </div>
    )
}

export default function PtAccordion({ items:itemsProp }) {

    const [items, setItems] = useState(itemsProp);
    const onExpanded = (expandedItem) => {
        setItems(current => current.map(item => {

            if (item.id === expandedItem.id) {
                item.expanded = true;
            } else {
                item.expanded = false;
            }

            return item;
        }))
    }
    return (
        <>
        <div className="accordion">
            { items.map(item => 
                <PtAccordionPanel 
                    key={item.id} 
                    item={item}
                    onExpanded={ onExpanded }   
                />)}
        </div>

        </>
    )
}
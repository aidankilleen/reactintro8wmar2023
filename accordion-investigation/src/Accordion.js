import { useState } from "react";

export default function Accordion({ items:itemsProp }) {

    console.log("rendering Accordion()");

    const [items, setItems] = useState(itemsProp);

    const onClick = (clickedItem) => {

        console.log(items);

        setItems(current => current.map(item => {
            item.expanded = item.id === clickedItem.id;
            return item;
        }));
    }

    return (
        <>
        <div className="accordion">
            { 
                items.map(item => {

                    return (
                        <div key={ item.id } className="accordion-item">
                            <h2 
                                onClick = { () => onClick(item) }
                                style = {{ backgroundColor: item.expanded ? 'lightblue' : 'lightgreen' }} 
                            >
                                { item.title }
                            </h2>
                            { item.expanded && <p>{ item.text }</p> }
                        </div>
                    )
                }) 
            }
        </div>
        </>
    )

}


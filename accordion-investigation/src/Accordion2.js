import { useState } from "react";

export default function Accordion({ items:itemsProp }) {

    const [items, setItems] = useState(itemsProp);

    const onClick = (clickedItem) => {
        //alert(`clicked: ${clickedItem.title}`);
        // doesn't work - clickedItem.expanded = !clickedItem.expanded;

        /*
        setItems(current => current.map(item => {
            item.expanded = item.id === clickedItem.id;
            return item;
        }))
        */
        
        setItems(current => {

            let newState = current.map(item => {

                console.log(item);
                if (item.id === clickedItem.id) {
                    item.expanded = true;
                } else {
                    item.expanded = false;
                }
                //item.expanded = item.id === clickedItem.id;
                return item;
            });
            return newState;
        })
        
    }

    return (
        <>
        <div className="accordion">
            { 
                items.map(item => {

                    return (
                        <div key={ item.id } className="accordion-item">
                            <h2 onClick = { () => onClick(item) }>
                                { item.title }
                            </h2>
                            { item.expanded && <p>{ item.text }</p> }
                        </div>
                    )
                }) 
            }
        </div>
        <hr/>
        { JSON.stringify(items) }
        </>
    )

}


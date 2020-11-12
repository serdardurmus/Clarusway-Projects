import React, {useState} from 'react';

export function Card ({name}) {
    // const {name} = props;

    const [names,setName] = useState("Test");

    return (
        <div className= "card-wrapper">
            {names || "MMY CARD"}
            
        </div>
    )
}
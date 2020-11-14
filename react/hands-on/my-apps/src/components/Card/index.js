import React from 'react';
import './Card.style.css';
export const Card = () => {
    return (
        <div 
            className="card-wrapper"
            // style={cardStyle}
        >
            <p>CARD</p>
        </div>
    )
};

const cardStyle = {
    color: "red",
    backgroundColor: "#bdbdbd"
}
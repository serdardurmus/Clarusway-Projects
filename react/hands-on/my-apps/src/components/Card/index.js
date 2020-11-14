import React from 'react';
// import styles from './Card.module.css';
import './Card.module.css';

export const Card = () => {
    return (
        <div 
            className="cardWrapper"
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
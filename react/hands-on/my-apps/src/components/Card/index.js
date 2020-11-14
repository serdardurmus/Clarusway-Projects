import React from 'react';
// import styles from './Card.module.css';
import './Card.style.scss';

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
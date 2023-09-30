import React from 'react';
import '../App.css';

const Card = (props) => {
    
    const showCardAnswer = props.showCardAnswer;
    const card = props.card;
    const toggleCardAnswer = props.toggleCardAnswer; 

    return (
        <div className="Card" onClick={toggleCardAnswer}>
            <div className="card-text">
                {showCardAnswer ? card.answer : card.question}
            </div>
        </div>
    )
};

export default Card;
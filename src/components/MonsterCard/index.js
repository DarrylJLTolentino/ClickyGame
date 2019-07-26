import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="monsterCard card" onClick = {() => props.click(props.id)}>
            <img className = "monsterImage" alt={props.name} src={props.image} />
        </div>
    );
}

export default Card;
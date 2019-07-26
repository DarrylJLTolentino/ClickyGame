import React from "react";

const styles = {
    gamespace: {
        display: "flex",
        flexWrap: "wrap"
    }
}

function GameSpace(props) {
    return (
        <div className = "container justify-content-center" style = {styles.gamespace} >
            {props.children}
        </div>
    );
}

export default GameSpace;
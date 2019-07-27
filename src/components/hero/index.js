import React from "react";

function Hero(props) {
    const heroImage = {
        backgroundImage: `url("${props.src}")`,
        backgroundSize: "auto 100%",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black"
    }

    console.log(props.src);

    return (
        <div>
            <div style={heroImage} className="jumbotron jumbotron-fluid">
                <div className="container text-left">
                    <h1 className="display-4">Monster Hunter!</h1>
                    <p className="lead">{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
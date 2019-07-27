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
                    {!props.name ?
                        <p className="lead">Click on an image to slay the monster! Don't click the same monster or you lose!</p>
                        :
                        <p className="lead">You have slain the mighty {props.name}! Choose another monster to slay!</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default Hero;
import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div>
            <ul className="nav fixed-top">
                <li className="nav-item">
                    <a className="nav-link active" href="/">
                        {/* <img src="https://banner2.kisspng.com/20180816/sps/kisspng-monster-hunter-world-logo-brand-font-portable-net-pierwsza-mini-sekcja-monster-hunter-world-crown-5b75c19f1870f9.6004538515344439351001.jpg" alt = "monster hunter world logo" /> */}
                    </a>
                </li>
                <li className = "nav-item">
                    <p className = "score">Score: {props.score} / High Score: {props.high_score}</p>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
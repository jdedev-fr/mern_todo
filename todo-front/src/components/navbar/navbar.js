import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function navCon() {
    return (
        <React.Fragment>
            <Link to="/tasks">Mes taches</Link>
            <Link to="/me">Mon profil</Link>
            <Link to="/disconnect">Déconnexion</Link>
        </React.Fragment>
    )
}
function navNoCon() {
    return (
        <React.Fragment>
            <Link to="/register">Inscription</Link>
            <Link to="/connect">Connection</Link>
        </React.Fragment>
    )
}
export default function Navbar(props) {
    return (
        <header>
            <h1>Mes taches</h1>
            <nav>
                {(props.conn) ? navCon() : navNoCon()}
            </nav>
        </header>
    )
}
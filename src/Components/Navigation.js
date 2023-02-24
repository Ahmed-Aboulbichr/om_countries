import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (

        <div className="Navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li style={{ display: "inline", color: "black", marginRight: "50px", marginLeft: "10px" }}>
                        Acceuil
                    </li>
                </NavLink>
                <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li style={{ display: "inline", color: "black" }}>
                        à propos
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
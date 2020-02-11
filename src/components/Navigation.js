import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="gnb">
            <Link className="btn_home" to="/" >Home</Link>
            <Link className="btn_about" to={{
                pathname: "/about",
                state: {
                    fromNavigation: true
                }

            }}>About</Link>
        </nav>
    )
}




export default Navigation;
import React from "react";
// import { NavlinkStyle } from "../styles";

type NavProps = {
    route: string;
    link: string
};

function Navlink({ route, link }: NavProps) {

    return (
    
        <li >
            <a style={{
                textDecoration: "none", display: "block", color: "white",
                padding: "14px 16px", textDecorationLine: "none"
            }} href={link}>{route}</a>

        </li>
    )
}

export default Navlink;

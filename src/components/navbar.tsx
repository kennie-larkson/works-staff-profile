import React, { ReactElement } from "react";
import { NavbarStyle } from "../styles";
// import Navlink from "./navlink";

type NavbarProps = {
    status: string | ReactElement;
    // paraOne: ReactElement;
    // paraTwo: ReactElement;
}
function Navbar({ status }: NavbarProps) {
    return (
        <>
            <NavbarStyle>

                <h1 style={{ textAlign: "center", display: "inline", marginLeft: "1em", alignItems:"center" }}>Works Staff Book</h1>
                <p style={{ paddingLeft: '1.5em', color: "whitesmoke" }}>{status}</p>
            </NavbarStyle>
            
            {/* {paraOne}
            {paraTwo} */}
        </>
    )
}

export default Navbar;
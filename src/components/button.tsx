import React from "react";
// import { ButtonStyle } from "../styles";

type ButtonProps = {
    text: string;
    onclick?(): void;
    type?: string;
}

const Button = ({ text, onclick, type }: ButtonProps) => {
    return (

        <div className="form-group row" >
            <div className="col-sm-4">
                <button type="submit" typeof={type} onClick={onclick} className="btn btn-primary">{text}</button>
            </div>
        </div>
    )
}

export default Button;
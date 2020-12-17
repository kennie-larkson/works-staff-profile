/* eslint-disable no-unreachable */
import React from "react";
import {InputFieldStyle} from "../styles";

interface InputFieldProps {
    name: string;
    type: string;
};

const InputField = ({name, type}: InputFieldProps) => {
return <>

<InputFieldStyle>
<label htmlFor="">{name}:</label>
<input type={type}/>
</InputFieldStyle>

</>
    
};

export default InputField;
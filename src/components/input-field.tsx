/* eslint-disable no-unreachable */
import React from "react";

type InputProps = {
    label: string;
    value: string;
    handleTag(event: any): void;
    type: string;
    placeholder: string;
    bio?: string;
    handleBio?(): void;
};

const InputField: React.FC<InputProps> = ({ label, value, handleTag, type, placeholder, bio, handleBio }) => {

    const checkType = () => {
        switch (label) {
            case "Description":
                return (
                    <div className="col-sm-6">
                        <textarea className="form-control" value={bio} onChange={handleBio} placeholder={placeholder} name="bio" id="bio" cols={20} rows={10}></textarea>
                    </div>
                )
                break;

            case "First name":
                return (
                    <div className="col-sm-4"><input className="form-control" typeof={type} value={value} onChange={handleTag} type="text" name="fname" id="fname" placeholder={placeholder} />{type === "email" ? <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> : ""} </div>
                )
                break;

            case "Last name":
                return (
                    <div className="col-sm-4"><input className="form-control" typeof={type} value={value} onChange={handleTag} type="text" name="fname" id="fname" placeholder={placeholder} /></div>
                )
                break;

            case "Unit":
                return (
                    <div className="col-sm-4"><input className="form-control" typeof={type} value={value} onChange={handleTag} type="text" name="fname" id="fname" placeholder={placeholder} /></div>
                )
                break;

            case "Rank":
                return (
                    <div className="col-sm-4"><input className="form-control" typeof={type} value={value} onChange={handleTag} type="text" name="fname" id="fname" placeholder={placeholder} /></div>
                )
                break;

            case "Email":
                return (
                    <div className="col-sm-4"><input className="form-control" typeof={type} value={value} onChange={handleTag} type="text" name="fname" id="fname" placeholder={placeholder} />{type === "email" ? <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> : ""} </div>
                )
                break;

            default:
                break;
        }
    }
    return (

        <div className="form-group row">
            <label htmlFor="fname" className="col-sm-2 col-form-label">{label}</label>

            {checkType()}

        </div>


    );
};

export default InputField;
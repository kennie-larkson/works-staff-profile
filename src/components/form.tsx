import React from "react";
// import {ProfilePage} from "../pages/Profile"
import InputTag from "../components/input-field";
import Button from "../components/button";
import FormHeader from "./form-header";

// import { FontStyle } from "../styles";


export const Form: React.FC = () => {

    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [rank, setRank] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [bio, setBio] = React.useState("");
    const [unit, setUnit] = React.useState("");

    const [formDetails, setFormDetails] = React.useState(<div></div>);

    const handleUnit = (event: any) => {
        setUnit(event.target.value);
    };

    const handleRank = (event: any) => {
        setRank(event.target.value);
    };

    const handleGender = (event: any) => {
        setGender(event.target.value);
    };

    const handleBio = (event: any) => {
        setBio(event.target.value);
    };

    const handleFname = (event: any) => {
        setFname(event.target.value);
    };

    const handleLname = (event: any) => {
        setLname(event.target.value);

    };

    const handleEmail = (event: any) => {
        setEmail(event.target.value);
    };


    const handleOnSubmit = (event: any) => {

        event.preventDefault();



        setFormDetails(<div className="container-fluid">
            <p>Confirm your details please!</p>
            <section>
                <h1>First name: {fname}</h1>
                <h1>Last name: {lname}</h1>
                <h1>Email: {email}</h1>
                <h1>Rank: {rank}</h1>
                <h1>Unit: {unit}</h1>
                <h1>Bio: {bio}</h1>
            </section>
        </div>);

    };



    return (


        <main >

            <form onSubmit={handleOnSubmit} method="post" action="" >

                <legend>Register your profile</legend>

                <FormHeader />

                <InputTag label="First name" value={fname} handleTag={handleFname} type="text" placeholder="first name" />
                <InputTag label="Last name" value={lname} handleTag={handleLname} type="text" placeholder="last name" />
                <InputTag label="Email" value={email} handleTag={handleEmail} type="email" placeholder="abc@xyz.com" />
                <InputTag label="Unit" value={unit} handleTag={handleUnit} type="text" placeholder="Electrical" />
                <InputTag label="Rank" value={rank} handleTag={handleRank} type="text" placeholder="Engineer 1" />


                <div className="form-group row">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-4">
                        <select name="gender" id="" className="form-control" value={gender} onChange={handleGender} >
                            <option value="" defaultValue="Select your gender">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>

                <InputTag label="Description" value={bio} handleTag={handleBio} type="text" placeholder="Describe yourself" />

                <Button type="submit" text="Register" />

            </form>

            {formDetails}

        </main>


    );
}
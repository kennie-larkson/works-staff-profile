import { stringify } from "querystring";
import React from "react";

const Form2 = () => {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const [rank, setRank] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [people, setPeople] = React.useState(Array<{}>());

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const person = { firstName, lastName, email, unit, rank, gender, bio };
        setPeople((people) => {
            return [...people, person];
        });
        console.log(people);

    }

    return <>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" value={firstName} name="firstName" id="firstName" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" value={lastName} name="lastName" id="lastName" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" value={email} name="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="unit">Unit: </label>
                <input type="text" value={unit} name="unit" id="unit" />
            </div>
            <div className="form-group">
                <label htmlFor="rank">Rank: </label>
                <input type="text" value={rank} name="rank" id="rank" />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender: </label>
                <input type="text" value={gender} name="gender" id="gender" />
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" value={bio} id="bio" cols={30} rows={10} />
            </div>
            <button type="submit" className="btn">Add Me</button>
        </form>
    </>
};

export default Form2;
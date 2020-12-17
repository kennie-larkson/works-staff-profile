import React from "react";


const Form2 = () => {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const [rank, setRank] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [people, setPeople] = React.useState(Array<{ firstName: any, lastName: any, unit: any, rank: any, gender: any, bio: any, email: any }>());

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (firstName && lastName && email && unit && rank && gender && bio) {
            const person = { firstName, lastName, email, unit, rank, gender, bio };
            setPeople((people) => {
                console.log(person);
                console.log([...people, person]);

                return [...people, person];
            });

            setFirstName('');
            setLastName('');
            setEmail('')
            setUnit('');
            setRank('');
            setGender('');
            setBio('');

        }
        else {
            console.log('no values')
        }

    };



    return <>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" value={firstName} name="firstName" id="firstName"
                    onChange={(e) => { setFirstName(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" value={lastName} name="lastName" id="lastName"
                    onChange={(e) => { setLastName(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" value={email} name="email" id="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="unit">Unit: </label>
                <input type="text" value={unit} name="unit" id="unit"
                    onChange={(e) => { setUnit(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="rank">Rank: </label>
                <input type="text" value={rank} name="rank" id="rank"
                    onChange={(e) => { setRank(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender: </label>
                <input type="text" value={gender} name="gender" id="gender"
                    onChange={(e) => { setGender(e.target.value) }}
                />
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" value={bio} id="bio" cols={30} rows={10}
                    onChange={(e) => { setBio(e.target.value) }}
                />
            </div>
            <button type="submit" className="btn" style={{ backgroundColor: "white" }}>Add Me</button>
        </form>

        <article>
            {
                people.map((person) => {
                    const { firstName, lastName, unit, rank, gender, bio, email } = person;
                    return <div>
                        <h3>{firstName} {lastName}</h3>
                        <span>
                            <h4>{unit}</h4>
                            <h4>{rank}</h4>
                            <h4>{gender}</h4>
                            <h4>{bio}</h4>
                            <h4>{email}</h4>
                        </span>
                    </div>
                })
            }
        </article>
    </>
};

export default Form2;
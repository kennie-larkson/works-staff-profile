import React from "react";


const Form2 = () => {

    const id = new Date().getTime().toString();

    const [person, setPerson] = React.useState({
        firstName: '', lastName: '', unit: '', rank: '',
        gender: '', bio: '', email: ""
    });

    const [people, setPeople] = React.useState(Array);

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (person.firstName && person.lastName && person.unit && person.rank && person.gender && person.email && person.bio) {
            const newPerson = { ...person, id };
            setPeople([...people, newPerson]);
            setPerson({
                firstName: '', lastName: '', unit: '', rank: '',
                gender: '', bio: '', email: ""
            });
        }
    }


    return <>
        <form className="form" >
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" value={person.firstName} name="firstName" id="firstName"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" value={person.lastName} name="lastName" id="lastName"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" value={person.email} name="email" id="email"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="unit">Unit: </label>
                <input type="text" value={person.unit} name="unit" id="unit"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="rank">Rank: </label>
                <input type="text" value={person.rank} name="rank" id="rank"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender: </label>
                <input type="text" value={person.gender} name="gender" id="gender"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" value={person.bio} id="bio" cols={30} rows={10}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn" style={{ backgroundColor: "white" }}>Add Me</button>
        </form>

        <article>
            {
                people.map((person: any) => {
                    const { firstName, lastName, unit, rank, email, gender, bio, id } = person;
                    return (
                        <section key={id}>
                            <div>{firstName}</div>
                            <div>{lastName}</div>
                            <div>{unit}</div>
                            <div>{rank}</div>
                            <div>{gender}</div>
                            <div>{email}</div>
                            <div>{bio}</div>
                        </section>
                    )
                })
            }
        </article>
    </>
};

export default Form2;
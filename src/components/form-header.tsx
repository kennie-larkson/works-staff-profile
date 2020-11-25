import React from "react";

const FormHeader = () => {
    return (
        <main style={{ display: "flex", backgroundColor: "whitesmoke", margin: "1em" , borderRadius: "15px" }}>
            <header style={{ backgroundColor: "black" , borderRadius: "5px"  }}>
                <p style={{padding: "1em", lineHeight: "2"}}>The aim of this application is to create a directory in form of as profile list for staffs of the works department. In order to achieve this, we implore you
                to please set up a profile for yourself so it can be saved within the application and accessed at anytime in the future.
                We require only basic staff information and nothing personal (yet) :)
                </p>
            </header>
        </main>
    );
};

export default FormHeader;
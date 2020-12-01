import React from "react";
import Card from "./card";
// import { CardContainer } from "../styles";

const staffListContainer: React.CSSProperties = {
    padding: "15px 15px",
    marginRight: "5px",
    marginBottom: "5px",
    backgroundColor: "#ffffff",
    width: "400px",
    minHeight: "40px",
    borderRadius: "3px",
    flexGrow: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",

}

const headingContainer: React.CSSProperties = {
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Noto Sans JP, sans-serif'

    
}

const imageContainer: React.CSSProperties = {
    width: "200px",
    minHeight: "200px",
    borderRadius: "100%",
    marginBottom: "5px",
    backgroundColor: "#ebecf0",
    border: "2px solid #3179ba",
}

interface staffProps {
    name: string;
    id: number;
    rank: string;
    bio: string;
};

const Staffs = ({ name, rank, bio }: staffProps) => {

    return (
        <>
            <section style={staffListContainer}>
                <header style={headingContainer}>{name}</header>
                <img style={imageContainer} src="https://randomwordgenerator.com/img/picture-generator/53e2d3464b5bac14f1dc8460962e33791c3ad6e04e507440762e7ad39f4fc4_640.jpg" alt="randomImage" width="100%" />


                <Card rank={rank} bio={bio} />

            </section>
        </>
    )


}

export default Staffs;

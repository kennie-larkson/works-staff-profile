import React from "react";
import { CardStyle } from "../styles";

const CardContainer: React.CSSProperties = {
    padding: "5px 5px",
    marginRight: "2px",
    backgroundColor: "#ebecf0",
    width: "300px",
    minHeight: "40px",
    borderRadius: "3px",
    flexGrow: 0,
    // fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "2",
    fontFamily: "Quicksand, sans-serif"

    
}

interface cardProps {
    bio: string;
    rank: string;
};

const Card = ({bio, rank}: cardProps) => {

    return (
        <>
        <article style={CardContainer}>
            
    <p>{bio}</p>
    <p>{rank}</p>
        
        </article>
        </>
    )
}

export default Card;
import React from "react";
import { CardContainer } from "../styles";

interface cardProps {
    bio: string;
    rank: string;
};

const Card = ({ bio, rank }: cardProps) => {

    return (
        <>
            <CardContainer>

                <p>{bio}</p>
                <p>{rank}</p>

            </CardContainer>
        </>
    )
}

export default Card;
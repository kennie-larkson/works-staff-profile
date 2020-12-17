import React from "react";
import { CardContainer } from "../styles";

interface CardProps {
    bio: string;
    rank: string;
    unit?: string;
};

const Card = ({ bio, rank, unit }: CardProps) => {

    return (
        <>
            <CardContainer>

                <p>{bio}</p>
                <p>{rank}</p>
                <p>{unit}</p>

            </CardContainer>
        </>
    )
}

export default Card;
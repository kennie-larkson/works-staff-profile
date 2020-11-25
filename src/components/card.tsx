import React from "react";
import { CardStyle } from "../styles";

type CardProps = {
    name: string;
    rank: string;
    bio: string;
    gender: string;
    unit: string;
}

const Card = ({ name, rank, bio, unit, gender }: CardProps) => {
    return (
        <article>
            <CardStyle >
                <h1>{name}</h1>
                <p>{unit}</p>
                <p>{rank}</p>
                <p>{gender}</p>
                <p>{bio}</p>
            </CardStyle>
        </article>
    );
}

export default Card;
import React from "react";
import { CardStyle } from "../styles";

// type CardProps = {
//     name: string;
//     rank: string;
//     bio: string;
//     gender: string;
//     unit: string;
// }

const Card = ( data: { name: string; unit: string; rank: string; gender: string; bio: string; } ) => {
    return (
        <article>
            <CardStyle >
                <h1>{data.name}</h1>
                <p>{data.unit}</p>
                <p>{data.rank}</p>
                <p>{data.gender}</p>
                <p>{data.bio}</p>
            </CardStyle>
        </article>
    );
}

export default Card;
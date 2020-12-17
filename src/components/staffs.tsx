import React from "react";
import Card from "./card";
import { ImageContainer, StaffContainer, HeadingContainer } from "../styles";


interface StaffProps {
    name: string;
    id: number;
    rank: string;
    bio: string;
    unit?: string;
};

const Staffs = ({ name, rank, bio, unit }: StaffProps) => {

    return (
        <>
            <StaffContainer>

                <HeadingContainer>{name}</HeadingContainer>

                <ImageContainer src="https://randomwordgenerator.com/img/picture-generator/53e2d3464b5bac14f1dc8460962e33791c3ad6e04e507440762e7ad39f4fc4_640.jpg" alt="randomImage" width="100%" />

                <Card rank={rank} bio={bio} unit={unit} />

            </StaffContainer>
        </>
    )


}

export default Staffs;

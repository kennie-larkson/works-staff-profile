import React from "react";
import Card from "./card";
import { CardContainer } from "../styles";

const Staffs = ( {data, loading}: any) => {

    const { id } = data;

    if (loading) return <p>Loading staff data...</p>;

    return (
        <main>

            <CardContainer key={id}>
                <Card key={id} {...data} />
            </CardContainer>

        </main>
    );

}

export default Staffs;

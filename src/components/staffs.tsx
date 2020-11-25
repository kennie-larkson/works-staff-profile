import React from "react";
import Card from "./card";
import { CardContainer } from "../styles";

const Staffs = ({ loading, data }: any) => {

    if (loading) return <p>Loading staff data...</p>;

    return (
        <main>
            <section>
                {data.getStaffs.map((staff: { id: string; name: string; unit: string; rank: string; gender: string; bio: string; }) => {

                    const { id } = staff;

                    return (
                        <CardContainer key={id}>
                            <Card key={id} {...staff} />
                        </CardContainer>

                    );
                }

                )
                }
            </section>
        </main>
    );

}

export default Staffs;

import React from "react";
// import { gql, useQuery } from "@apollo/client";
import { gql, useQuery } from "@apollo/client";


export const query = gql`
query {
    getStaffs {
        id
        name
        unit
        rank
        gender
        bio
    }
}
`

export const useGetQuery = () => {

    const { loading, error, data } = useQuery(query);

    if (loading) return <p>Loading staff data...</p>;
    if (error) return `Error: ${error.message}`;
    const response = data.getStaffs
    // console.log();
    return response;

};


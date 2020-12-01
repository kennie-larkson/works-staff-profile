import React from "react";
// import { gql, useQuery } from "@apollo/client";
import { gql} from "@apollo/client";


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

// export const useGetQuery = () => {
//     const {loading, data} = useQuery(query);
    
//     if(loading) return <p>Loading staff data...</p>;

//     console.log(data);
    
    
// };
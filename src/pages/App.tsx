import React from 'react';
// import { AppContainer } from "../styles";
import "./App";
import Button from "../components/button";
import { profiledata } from "../data/profile";

import Navbar from "../components/navbar";

import { Form } from "../components/form";
// import { useQuery } from "@apollo/client";
import { query } from "../data/query";
import Staffs from "../components/staffs";

const AppContainer: React.CSSProperties = {
  display: "flex",
  // alignItems: "flex-start",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  backgroundColor: "#3179ba",
  // height: "100%",
  padding: "20px",
  width: "100%",
  flexWrap: "wrap",

}


const App = () => {

  const [data, setData] = React.useState(profiledata);

  console.log(data);

  return (
    <>
      <div style={AppContainer}>
        {data.map(entry => {
          const { id } = entry;
          return (
            <Staffs key={id}  {...entry} />
          )
        })}

      </div>
    </>
  )

};

export default App;

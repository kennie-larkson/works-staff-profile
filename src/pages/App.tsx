import React from 'react';
import { AppContainer } from "../styles";
import "./App";
import Button from "../components/button";
import { profiledata } from "../data/profile";

import Navbar from "../components/navbar";

import { Form } from "../components/form";
// import { useQuery } from "@apollo/client";
import { query } from "../data/query";
import Staffs from "../components/staffs";

const App = () => {

  const [data, setData] = React.useState(profiledata);

  console.log(data);

  return (
    <>
      <AppContainer>
        {data.map(entry => {
          const { id } = entry;
          return (
            <Staffs key={id}  {...entry} />
          )
        })}

      </AppContainer>
    </>
  )

};

export default App;

import React from 'react';
import { AppContainer } from "../styles";
import "./App";
import Button from "../components/button";

import Navbar from "../components/navbar";

import { Form } from "../components/form";
import { useQuery } from "@apollo/client";
import { query } from "../data/query";
import Staffs from "../components/staffs";


const App = () => {
  return <h1>This is the App component</h1>

};

export default App;

import React from 'react';
import { AppStyle } from "../styles";
import "./App";
import Button from "../components/button";
// import Card from "../components/card";
// import { CardContainer } from "../styles";
import Navbar from "../components/navbar";
// import { fetchData } from "../data/dataapi";
// import { profiledata } from "../data/profile";
import { Form } from "../components/form";
import { useQuery } from "@apollo/client";
import { query } from "../data/query";
import Staffs from "../components/staffs";


const App = () => {

  const [online, setOnline] = React.useState(false);
  const [profiles, setProfile] = React.useState([]);
  const [isRegistered, setIsRegistered] = React.useState(true);

  const { loading, data } = useQuery(query);
  console.log(data);

  const onclickHandler = () => {
    setOnline(online ? false : true);
  };

  const numOfStaffs = data.length;
  // const numOfStaffs = profiles.length;

  const paraOne = <div style={{ paddingLeft: '1.5em' }}>
    {online ? <Button text="Sign Out" onclick={onclickHandler} /> : <Button text="Sign In" onclick={onclickHandler} />}
  </div>;

  const paraTwo = <p style={{ paddingLeft: '1.5em' }}>
    {numOfStaffs > 1 ? `We have ${numOfStaffs} staffs presently` : `We have ${numOfStaffs} staff presently`}
  </p>;

  return (
    <main>
      <AppStyle>

        <Navbar status={online ? `You are online` : `You are offline`} />

        {!isRegistered ? <Form /> :
          <>
            {paraOne}
            {paraTwo}

            <Staffs loading={loading} data={data} />

          </>
        }
      </AppStyle>
    </main>
  );
};

export default App;

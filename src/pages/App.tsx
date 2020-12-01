import React from 'react';
import { AppStyle } from "../styles";
import "./App";
import Button from "../components/button";

import Navbar from "../components/navbar";

import { Form } from "../components/form";
import { useQuery } from "@apollo/client";
import { query } from "../data/query";
import Staffs from "../components/staffs";


const App = () => {

  const [online, setOnline] = React.useState(false);
  const [staffs, setStaffs] = React.useState([]);
  const [isRegistered, setIsRegistered] = React.useState(true);

  const { loading, data } = useQuery(query);

  const getData = async () => {
    try {
      await data;
      setStaffs(data)
    } catch (error) {
      if (error) console.log(`Oops!: ${error}`);

    }
  }

  React.useEffect((getData) => {

    getData();

  }, [data]);

  const onclickHandler = () => {
    setOnline(online ? false : true);
  };

  // const numOfStaffs = staffs.length;

  const paraOne = <div style={{ paddingLeft: '1.5em' }}>
    {online ? <Button text="Sign Out" onclick={onclickHandler} /> : <Button text="Sign In" onclick={onclickHandler} />}
  </div>;

  // const paraTwo = <p style={{ paddingLeft: '1.5em' }}>
  //   {numOfStaffs > 1 ? `We have ${numOfStaffs} staffs presently` : `We have ${numOfStaffs} staff presently`}
  // </p>;

  return (
    <main>
      <AppStyle>

        <Navbar status={online ? `You are online` : `You are offline`} />

        {!isRegistered ? <Form /> :
          <>
            {paraOne}
            {/* {paraTwo} */}

            {staffs.map(staff => {
              // const {id, name, unit, rank, gender, bio} = staff;

              return <Staffs loading={loading} data={staff} />
            })}

          </>
        }
      </AppStyle>
    </main>
  );
};

export default App;

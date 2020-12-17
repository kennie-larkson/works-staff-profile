import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { AppContainer, StaffListContainer } from "../styles";
import "./App";
// import Button from "../components/button";
import { profiledata } from "../data/profile";
// import Navbar from "../components/navbar";
import { Form } from "../components/form";
import Form2 from "../components/form2"
import { query } from "../data/query";
import Staffs from "../components/staffs";


const App = () => {

  const [dataLocal, setData] = useState(profiledata);
  const [staffs, setStaffs] = useState([]);

  const { data, loading, error } = useQuery(query);

  useEffect(() => {
    if (data) console.log(data);

  }, [data]);

  if (loading) return <p style={{ backgroundColor: '#3179ba', color: 'fff' }}>Loading staff data...</p>;
  // if (error) return <p>Error:{error.message}</p>;

  console.log(staffs);

  return (
    <>
      <AppContainer>
        {/* <Form /> */}
        {staffs.length < 1 ?
          <><Form2 />
            <StaffListContainer>
              {dataLocal.map(entry => {
                const { id } = entry;
                return (
                  <Staffs key={id}  {...entry} />
                )
              })}
            </StaffListContainer>
          </>

          :

          <StaffListContainer>
            {staffs.map(staff => {
              const { id } = staff;
              return (
                <Staffs key={id}  {...staff} />
              )
            })}
          </StaffListContainer>
        };
      </AppContainer>
    </>
  );

};

export default App;

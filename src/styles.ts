import styled from "styled-components";

export const ButtonStyle = styled.button`
padding: 0.1em;
background-color: lightblue;
margin: 0.2em;
color: whitesmoke;
border-radius: 5px;
line-height: 2;
width: 100px;
border: 0;
`

export const HeadingContainer = styled.header`
font-size: 25px;
font-weight: bold;
text-align: center;
font-family: Noto Sans JP, sans-serif;
`

export const ImageContainer = styled.img`
width: 200px;
min-height: 200px;
border-radius: 100%;
margin-bottom: 5px;
background-color: #ebecf0;
border: 2px solid #3179ba;
`

export const StaffContainer = styled.section`
padding: 15px 15px;
margin-right: 5px;
margin-bottom: 5px;
background-color: #ffffff;
width: 400px;
min-height: 40px;
border-radius: 3px;
flex-grow: 0;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
`

export const StaffListContainer = styled.div`

display: flex;
// align-items: flex-start;
align-items: center;
justify-content: center;
flex-direction: row;
background-color: #3179ba;
// height: 100%;
padding: 20px;
width: 100%;
flex-wrap: wrap;
`

export const AppContainer = styled.div`
    display: flex;
  // align-items: flex-start;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #3179ba;
  // height: 100%;
  padding: 20px;
  width: 100%;
  flex-wrap: wrap;
`

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
background-color: #ebecf0;
width: 100%;
padding: 20px;
justify-content: center;
align-items: center;
margin-right: 45px;
margin-left: 45px;
border-radius: 5px;
`

export const CardContainer = styled.article`
    padding: 5px 5px;
    margin-right: 2px;
    background-color: #ebecf0;
    width: 300px;
    min-height: 40px;
    border-radius: 3px;
    flexGrow: 0,
    font-size: 20px;
    font-weight: bold;
    line-height: 2;
    font-family: Quicksand, sans-serif;
`

export const FormHeaderStyle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    line-height: 2;
    font-family: Quicksand, sans-serif;
`
export const InputFieldStyle = styled.div`
padding: 2px;

`

export const NavbarStyle = styled.ul`
list-style-type: none;
display: flex;
text-align: center;
margin: 0;
padding: 0; 
background-color: black;
`

export const ListStyle = styled.li`
display: inline ;
float: left ;
`

export const AnchorStyle = styled.a`
display: block;
padding: 8px;
backgroundColor: #dddddd;
`

export const FontStyle = styled.div`
display: inline-block;
border: 2px solid black;
width: 30%;
padding: 2em;
line-height: 2;
min-height: 1vm;
`

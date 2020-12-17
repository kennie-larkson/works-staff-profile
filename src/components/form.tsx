import React from "react";
// import {ProfilePage} from "../pages/Profile"
import { FormContainer } from "../styles";
import InputTag from "../components/input-field";
import Button from "../components/button";
import FormHeader from "./form-header";




export const Form = () => {
    return (
        <>
            <FormContainer>
                <FormHeader />
                <InputTag name="Name" type="text"/>
                <InputTag name="Rank" type="text"/>
                <InputTag name="Bio" type="text"/>
                <Button />
            </FormContainer>
        </>
    )

}
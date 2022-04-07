import React from "react";
import styled from "styled-components";

const FormatedDiv = styled.div`
    margin: 20px 0;
    color: #252525;
`;

const FormatedLabel = styled.label`
    display: block;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 15px;
    padding-left: 12px;
`;

const FormatedInput = styled.input`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    border: 2px solid #252525;
    border-radius: 7px;
    padding: 10px 10px;
    width: 100%;
    box-sizing: border-box;
`;

export const TextInputField = ({ name, onChange }) => {
    return(
        <FormatedDiv>
            <FormatedInput name={name} id={name} onChange={onChange}/>
            <FormatedLabel htmlFor={name}>
                {name}
            </FormatedLabel>
        </FormatedDiv>
    )
}
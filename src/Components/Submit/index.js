import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
    color: #f2f2f2;
    font-family: "Fredoka", sans-serif;
    font-weight: 400;
    font-size: 30px;
    background-color: #d94862;
    border-style: none;
    padding: 20px 50px;
    margin-top: 50px;
    border-radius: 100px;

    :hover {
        cursor: pointer;
    }
`;

export const SubmitComponent = ({ children, id }) => {
    return (
        <>
            <StyledLabel htmlFor={id}>{children}</StyledLabel>
            <input type="submit" name="submit" id={id} style={{display: 'none'}}/>
        </>
    );
};

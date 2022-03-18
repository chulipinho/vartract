import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    color: #F2F2F2;
    font-family: 'Fredoka', sans-serif;
    font-weight: 400;
    font-size: 30px;
    background-color: #D94862;
    border-style: none; 
    padding: 20px 50px;
    margin-top: 50px;
    border-radius: 100px;

    :hover {
        cursor: pointer;
    }
`;

export const ButtonComponent = ({ onClick, children }) => {

    return(
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};


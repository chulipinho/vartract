import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    color: #f2f2f2;
    font-family: "Fredoka", sans-serif;
    font-weight: 400;
    font-size: 30px;
    background-color: #d94862;
    border-style: none;
    padding: 15px 30px;
    margin-bottom: 25px;
    border-radius: 100px;
    width: 60vw;

    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        font-size: 20px;
    }
`;

export const DownloadButtonComponent = ({ onClick, children }) => {
    return (
        <>
            <StyledButton onClick={onClick}>{children}</StyledButton>
        </>
    );
};

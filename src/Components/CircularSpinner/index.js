import React from "react";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";

const Center = styled.div`
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const CircularSpinner = () => {
    return (
        <Center>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Center>
    );
};

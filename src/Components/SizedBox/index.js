// @ts-nocheck
import React from "react";
import styled from "styled-components";

const Box = styled.div`
    height: ${props => props.responsive ? "0" : props.height};
    width: ${props => props.responsive ? "0" : props.width};

    @media screen and (max-width: 800px) {
        height: ${props => props.responsive ? props.height : "0"};
        width: ${props => props.responsive ? props.width : "0"};
    }
`;

export const SizedBox = ({ height = "0", width = "0", responsive = false }) => {

    return <Box responsive={responsive} height={height} width={width}/>;
};

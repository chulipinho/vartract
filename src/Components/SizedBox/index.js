import React from "react";
import styled from "styled-components";

export const SizedBox = ({ height = "0", width = "0", responsive = false }) => {
    const Box = styled.div`
        height: ${responsive ? "0" : height};
        width: ${responsive ? "0" : width};

        @media screen and (max-width: 800px) {
            height: ${responsive ? height : "0"};
            width: ${responsive ? width : "0"};
        }
    `;

    return <Box />;
};

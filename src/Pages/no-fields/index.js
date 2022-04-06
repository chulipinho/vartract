import React from "react";
import { EditPageBody } from "../../Assets/styles/EditPageBody";
import { MainText, Title } from "../../Assets/styles/TextStyles";
import { InputButtonComponent } from "../../Components/InputButton";

export const NoFields = () => {
    const appTexts = require("../../Assets/text/app-texts-en.json");
    const pageText = appTexts["edit-page"]["no-fields"];

    return (
        <EditPageBody style={{ height: "100vh", textAlign: 'center' }}>
            <Title>{pageText.title}</Title>
            <MainText>{pageText["first-line"]}</MainText>
            <MainText>{pageText["button-label"]}</MainText>
            <InputButtonComponent
                id={"resend-file"}
                text={pageText["button-text"]}
            />
        </EditPageBody>
    );
};

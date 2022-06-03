import React from "react";
import { MainBody } from "../../Assets/styles/MainBody";
import { MainText, Title } from "../../Assets/styles/TextStyles";
import { InputButtonComponent } from "../../Components/InputButton";
import { useTranslation } from "react-i18next";

export const MainScreen = () => {
    const { t } = useTranslation("main-screen");

    return (
        <MainBody>
            <Title>Vartract</Title>
            <MainText>{t("first-line")}</MainText>
            <MainText>{t("second-line")}</MainText>
            <MainText>{t("third-line")}</MainText>
            <InputButtonComponent id="file-input" text={t("button-text")} />
        </MainBody>
    );
};

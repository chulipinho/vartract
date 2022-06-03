import React from "react";
import { useTranslation } from "react-i18next";
import { EditPageBody } from "../../Assets/styles/EditPageBody";
import { MainText, Title } from "../../Assets/styles/TextStyles";
import { InputButtonComponent } from "../../Components/InputButton";

export const NoFields = () => {
    const { t } = useTranslation("edit-page", { keyPrefix: "no-fields" });

    return (
        <EditPageBody style={{ height: "100vh", textAlign: "center" }}>
            <Title>{t("title")}</Title>
            <MainText>{t("first-line")}</MainText>
            <MainText>{t("button-label")}</MainText>
            <InputButtonComponent id={"resend-file"} text={t("button-text")} />
        </EditPageBody>
    );
};

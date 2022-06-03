// @ts-nocheck
import { MainBody } from "Assets/styles/MainBody";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getNewFile } from "Services/fileOperations/createNewFile";
import { saveAs } from "file-saver";
import { CircularSpinner } from "Components/CircularSpinner";
import { DownloadButtonComponent } from "Components/DownloadButton";
import { MainText, Title } from "Assets/styles/TextStyles";
import { useTranslation } from "react-i18next";

export const DownloadPage = () => {
    const location = useLocation();
    const locationState = location.state;
    const [newFile, setNewFile] = useState();
    const [state, setState] = useState("loading");
    const { t } = useTranslation("download-page");

    useEffect(() => {
        let isMounted = true;
        let originalFile;
        let newData;

        if (locationState) {
            originalFile = locationState.file;
            newData = locationState.data;
        }

        getNewFile(originalFile, newData).then((file) => {
            if (!isMounted) return;
            setNewFile(file);
            setState("loaded");
        });

        return () => {
            isMounted = false;
        };
    }, [locationState]);

    function downloadDocx() {
        newFile
            .generateAsync({ type: "blob" })
            .then((file) => saveAs(file, locationState.file.name));
    }

    if (!locationState) return <Navigate to="/" replace />;
    if (state === "loading") return <CircularSpinner />;

    return (
        <MainBody style={{ textAlign: "center" }}>
            <Title>{t("title")}</Title>
            <MainText>{t("first-line")}</MainText>
            <MainText style={{ marginBottom: "50px" }}>
                {t("second-line")}
            </MainText>
            <DownloadButtonComponent onClick={downloadDocx}>
                {t("download-docx")}
            </DownloadButtonComponent>
        </MainBody>
    );
};

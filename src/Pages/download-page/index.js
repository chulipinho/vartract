// @ts-nocheck
import { MainBody } from "Assets/styles/MainBody";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getNewFile } from "Services/fileOperations/createNewFile";
import { saveAs } from "file-saver";
import { CircularSpinner } from "Components/CircularSpinner";

export const DownloadPage = () => {
    const location = useLocation();
    const locationState = location.state;
    const [newFile, setNewFile] = useState();
    const [state, setState] = useState("loading");

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

    function download() {
        newFile
            .generateAsync({ type: "blob" })
            .then((file) => saveAs(file, "a.docx"));
    }

    if (!locationState) return <Navigate to="/" replace />;
    if (state === "loading") return <CircularSpinner />;

    return (
        <MainBody>
            <button onClick={download}>download</button>
        </MainBody>
    );
};

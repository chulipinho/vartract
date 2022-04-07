// @ts-nocheck
import { MainBody } from "Assets/styles/MainBody";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNewFile } from "Services/fileOperations/createNewFile";
import { saveAs } from "file-saver";
import { CircularSpinner } from "Components/CircularSpinner";
import { Navigate } from "react-router-dom";

export const DownloadPage = () => {
    const location = useLocation();
    const [newFile, setNewFile] = useState();
    const [state, setState] = useState("loading");

    useEffect(() => {
        let isMounted = true;
        const originalFile = location.state.file;
        const newData = location.state.data;

        getNewFile(originalFile, newData).then((file) => {
            if (!isMounted) return;
            setNewFile(file);
            setState("loaded");
        });

        return () => {
            isMounted = false;
        };
    }, [location.state.data, location.state.file]);

    function download() {
        newFile
            .generateAsync({ type: "blob" })
            .then((file) => saveAs(file, "a.docx"));
    }

    if (!location.state) <Navigate to="/" replace />;
    if (state === "loading") return <CircularSpinner />;

    return (
        <MainBody>
            <button onClick={download}>download</button>
        </MainBody>
    );
};

// @ts-nocheck
import { MainBody } from "Assets/styles/MainBody";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNewFile } from "Services/fileOperations/createNewFile";

export const DownloadPage = () => {
    const location = useLocation();
    const [newFile, setNewFile] = useState();
    const [state, setState] = useState("loading");

    useEffect(() => {
        let isMounted = true;
        const originalFile = location.state.file;
        const newData = location.state.data;

        getNewFile(originalFile, newData).then(file => {
            if(!isMounted) return;
            setNewFile(file);
            setState("loaded");
        });

        return () => {
            isMounted = false;
        };
    }, [location.state.data, location.state.file]);

    console.log(newFile);
    
    return <MainBody>
        <a href={newFile} download>download</a>
    </MainBody>;
};

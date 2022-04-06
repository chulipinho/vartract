import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EditPageBody } from "../../Assets/styles/EditPageBody";
import { TextInputField } from "../../Components/TextInputField";
import { MainText, Title } from "../../Assets/styles/TextStyles";
import { ButtonComponent } from "../../Components/Button";
import { Navigate, useLocation } from "react-router-dom";
import { getFieldsFrom } from "../../Services/fileOperations/loadFile";
import { CircularSpinner } from "../../Components/CircularSpinner";

const LANGUAGE = "en";
const appText = require(`../../Assets/text/app-texts-${LANGUAGE}.json`);

const FormatedDiv = styled.div`
    padding: 0 50px;
    width: 80%;
`;

export const EditPage = () => {
    const location = useLocation();
    const file = location.state;
    const [fields, setFields] = useState(null);
    const [state, setState] = useState("loading");

    useEffect(() => {
        let isMounted = true;

        getFieldsFrom(file).then((fields) => {
            if (!isMounted) return;
            setFields(fields);
            setState("loaded");
        });

        return () => {
            isMounted = true;
        };
    }, [file, state]);

    if (!file) {
        return <Navigate to="/" replace />;
    }

    if (state === "loading") return <CircularSpinner />;

    if (!fields) return <Navigate to="/no-fields" replace />;

    return (
        <EditPageBody>
            <FormatedDiv>
                <Title>{appText["edit-page"].title}</Title>
                <MainText>{appText["edit-page"].instructions}</MainText>
                <form>
                    {fields.map((e) => {
                        return <TextInputField key={e} name={e} />;
                    })}
                </form>
                <ButtonComponent onClick={() => {}}>{appText["edit-page"].button}</ButtonComponent>
            </FormatedDiv>
        </EditPageBody>
    );
};

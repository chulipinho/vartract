import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EditPageBody } from "../../Assets/styles/EditPageBody";
import { TextInputField } from "../../Components/TextInputField";
import { MainText, Title } from "../../Assets/styles/TextStyles";
import { ButtonComponent } from "../../Components/Button";
import { Navigate, useLocation } from "react-router-dom";
import { getFieldsFrom } from "../../Services/fileOperations/loadFile";

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
    
    useEffect(() => getFieldsFrom(file).then((fields) => {
        setFields(fields);
    }), [file]);

    if (!file) {
        return <Navigate to="/" replace />;
    }


    return (
        <EditPageBody>
            <FormatedDiv>
                <Title>{appText["edit-page"].title}</Title>
                <MainText>{appText["edit-page"].instructions}</MainText>
                <form>
                    {fields && fields.map((e) => {
                              console.log(e);
                              return <TextInputField key={e} name={e} />;
                          })}
                </form>
                <ButtonComponent>{appText["edit-page"].button}</ButtonComponent>
            </FormatedDiv>
        </EditPageBody>
    );
};

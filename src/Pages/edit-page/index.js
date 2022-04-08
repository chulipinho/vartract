import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EditPageBody } from "../../Assets/styles/EditPageBody";
import { TextInputField } from "../../Components/TextInputField";
import { MainText, Title } from "../../Assets/styles/TextStyles";
import { SubmitComponent } from "../../Components/Submit";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getFieldsFrom } from "../../Services/fileOperations/loadFile";
import { CircularSpinner } from "../../Components/CircularSpinner";
import { SizedBox } from "Components/SizedBox";

const LANGUAGE = "en";
const appText = require(`../../Assets/text/app-texts-${LANGUAGE}.json`);

const FormatedDiv = styled.div`
    padding: 0 50px;
    width: 80%;

    @media screen and (max-width: 800px) {
        padding: 0 20px;
        width: auto;
    }
`;

export const EditPage = () => {
    const location = useLocation();
    const file = location.state;
    const navigate = useNavigate();
    const [fields, setFields] = useState(null);
    const [state, setState] = useState("loading");
    const [formData, setFormData] = useState({});

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

    if (!file) return <Navigate to="/" replace />;
    if (state === "loading") return <CircularSpinner />;
    if (!fields) return <Navigate to="/no-fields" replace />;

    function handleSubmit(e) {
        e.preventDefault();

        navigate('/download-page', {state: {
            file: file,
            data: formData
        }});
    }

    function handleChange(e) {
        const data = formData;
        const name = e.target.name;
        const value = e.target.value;

        data[name] = value;

        setFormData(data);
    }

    return (
        <EditPageBody>
            <FormatedDiv>
                <Title>{appText["edit-page"].title}</Title>
                <MainText>{appText["edit-page"].instructions}</MainText>
                <SizedBox height='20px' responsive={true} />
                <form onSubmit={handleSubmit}>
                    {fields.map((e) => {
                        return <TextInputField key={e} name={e} onChange={handleChange} />;
                    })}
                    <SubmitComponent id='formSubmit'>
                        {appText["edit-page"].button}
                    </SubmitComponent>
                </form>
            </FormatedDiv>
        </EditPageBody>
    );
};

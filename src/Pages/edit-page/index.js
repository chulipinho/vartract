import React from "react";
import styled from "styled-components";
import { EditPageBody } from "../../Assets/styles/EditPageBody";
import { TextInputField } from "../../Components/TextInputField";
import { MainText, Title } from "../../Assets/styles/TextStyles";
import { ButtonComponent } from "../../Components/Button";

const testList = ['Nome', 'Data', 'Nome2', 'idade', 'quantidade'];
const LANGUAGE = 'en';
const appText = require(`../../Assets/text/app-texts-${LANGUAGE}.json`);

const FormatedDiv = styled.div`
    padding: 0 50px;
    width: 80%;
`;

export class EditPage extends React.Component {

    render() {
        return (
            <EditPageBody>
                <FormatedDiv>
                    <Title>{appText["edit-page"].title}</Title>
                    <MainText>
                        {appText["edit-page"].instructions}
                    </MainText>
                    <form>
                        {testList.map(e => <TextInputField key={e} name={e} />)}
                    </form>
                    <ButtonComponent>{appText["edit-page"].button}</ButtonComponent>
                </FormatedDiv>
            </EditPageBody>
        );
    }
}
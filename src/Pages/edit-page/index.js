import React from "react";
import styled from "styled-components";
import { EditPageBody } from "../../Assets/styles/EditPageBody";
import { TextInputField } from "../../Components/TextInputField";
import { MainText, Title } from "../../Assets/styles/TextStyles";

const testList = ['Nome', 'Data', 'Nome2', 'idade', 'quantidade'];

const FormatedDiv = styled.div`
    padding: 0 50px;
    width: 80%;
`;

export class EditPage extends React.Component {

    render() {
        return (
            <EditPageBody>
                <FormatedDiv>
                    <Title>teste</Title>
                    <MainText>
                        Please, fill the form fields acordingly then press the submit button.
                    </MainText>
                    <form>
                        {testList.map(e => <TextInputField key={e} name={e} />)}
                    </form>
                </FormatedDiv>
            </EditPageBody>
        );
    }
}
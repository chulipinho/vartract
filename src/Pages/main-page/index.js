import React from "react";
import { MainBody } from "../../Assets/styles/MainBody";
import { MainText, Title } from "../../Assets/styles/TextStyles";
import { InputButtonComponent } from "../../Components/InputButton";

const LANGUAGE = 'en';
const appTexts = require(`../../Assets/text/app-texts-${LANGUAGE}.json`);


export default class MainScreen extends React.Component {

    render() {

        return (
            <MainBody>
                <Title>Vartract</Title>
                <MainText>
                    {appTexts["main-screen"]["first-line"]}
                </MainText>
                <MainText>
                    {appTexts["main-screen"]["second-line"]}
                </MainText>
                <MainText>
                    {appTexts["main-screen"]["third-line"]}
                </MainText>
                <InputButtonComponent id="docx-file" text={appTexts["main-screen"]["button-text"]}/>
            </MainBody>

        )
    }
}
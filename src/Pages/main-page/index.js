import React from "react";
import { MainBody } from "../../Assets/styles/MainBody";
import { MainText, Title } from "../../Assets/styles/TextStyles";
import {ButtonComponent} from "../../Components/Button";

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
                <ButtonComponent>
                    {appTexts["main-screen"]["button-text"]}
                </ButtonComponent>
            </MainBody>

        )
    }
}
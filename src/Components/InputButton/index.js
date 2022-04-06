import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLabel = styled.label`
    color: #F2F2F2;
    font-family: 'Fredoka', sans-serif;
    font-weight: 400;
    font-size: 30px;
    background-color: #D94862;
    border-style: none; 
    padding: 20px 50px;
    margin-top: 50px;
    border-radius: 100px;

    :hover {
        cursor: pointer;
    }
`;

export const InputButtonComponent = ({ id, text }) => {
    const navigate = useNavigate();

    function handleChange (file) {
        navigate('/edit', {state: file});
    }

    return (
        <>
            <StyledLabel htmlFor={id}>{text}</StyledLabel>
            <input id={id} onChange={(e) => handleChange(e.target.files[0])} type="file" accept=".docx" style={{ display: "none" }} />
        </>
    );
};


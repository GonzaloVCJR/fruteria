import styled from "styled-components";

export const Container = styled.div`
    .error {
        color: red;
        font-size: 0.8rem;
        margin-top: 5px;
    }
`;

export const InputContainer = styled.div`
    width: 450px;
    height: 55px;
    background: transparent;
    border: 1.8px solid darkgray;
    border-radius: 10px;
    overflow: hidden;

    input {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding-left: 10px;
        font-size: 0.9rem;
        font-weight: 500;
    }


    /* HD */
    @media screen and (max-width: 1270px) {
        width: 300px;
    }

    /* TABLET */
    @media screen and (max-width: 1000px) {
        width: 350px;
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        width: 350px;
    }
`;

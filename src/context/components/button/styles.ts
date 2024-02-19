import styled from "styled-components";

export const Container = styled.div`
    width: 450px; 
    height: 55px; 
    background: #0656d6; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    border-radius: 55px; 
    cursor: pointer; 

    &:hover {
        opacity: 0.8; 
    }

    &:active {
        opacity: 0.7; 
    }

    input[type="button"],
    input[type="submit"] {
        width: 100%; 
        cursor: pointer;
        height: 100%; 
        background: #30b755;
        color: white; 
        font-weight: 500;
        font-size: 0.85rem;
        outline: none; 
        border: none; 
    }

    // Estilos responsivos 

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

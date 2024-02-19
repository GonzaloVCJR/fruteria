// Importa a biblioteca styled-components
import styled from "styled-components";
import authBackground from "../../img/auth-background.png";

// Estilo para o componente Container
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    height: 100%; 
    background: white; 
    background-image: url(${authBackground}); 
    background-size: 95%; 
    background-position-x: -150px; 
    background-position-y: -50px; 
    position: absolute; 
    
    /* HD */
    @media screen and (max-width: 1270px) {
    }

    /* TABLET */
    @media screen and (max-width: 1000px) {
        justify-content: center; 
        align-items: center; 
        background-size: cover; 
        background-position: 0%; 
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
    }
`;

export const ContentLeft = styled.div`
    display: flex;
    height: 100%;
    flex: 1.5;
    position: relative;

    /* HD */
    @media screen and (max-width: 1270px) {
    }

    /* TABLET */
    @media screen and (max-width: 1000px) {
        display: none;
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
    }
`;

export const ContentRight = styled.div`
    display: flex;
    height: 100%;
    background: white;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
    }


    /* HD */
    @media screen and (min-width: 1270px) {
        flex: 1; 
    }

    /* HD */
    @media screen and (max-width: 1270px) {
        flex: 1; 
    }

    /* TABLET */
    @media screen and (max-width: 1000px) {
        width: 80% !important; 
        height: 90%; 
        flex: none; 
        border-radius: 50px; 
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        width: 100% !important;
        border-radius: 0px;
        height: 100% !important;
    }
`;

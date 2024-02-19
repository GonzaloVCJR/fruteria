
import { CSSProperties } from "react";
import { Container } from "./styles.ts"
import React from "react";

// Interface que define las propriedades del componente Button
interface IButtonProps {
    text: string; 
    onClick(): void; 
    type?: "button" | "submit";
    style?: CSSProperties; 
    isLoading?: boolean;
}

const Button = ({ text, onClick, type, isLoading, style }: IButtonProps) => {
    return (
        // Renderiza o componente Container, aplicando estilos
        <Container style={{ ...style }}>
            {isLoading ? (
                <div className="loading"></div> 
            ) : (
                <input
                    type={type || "button"} 
                    onClick={onClick} 
                    value={text} 
                />
            )}
        </Container>
    );
}


export default Button;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CSSProperties, LegacyRef, forwardRef } from "react";
import { Container, InputContainer } from "./styles.ts"
import React from "react";

// Define la interfaz de propiedades para el componente de entrada, ampliando las propiedades de entrada HTML estándar
interface IIpuntProps extends React.InputHTMLAttributes<HTMLInputElement> {
    containerStyle?: CSSProperties; 
    errors?: string | null; 
}

// Ingrese el componente funcional usando forwardRef para habilitar el uso de referencia
const Input = forwardRef(({ containerStyle, errors, ...rest }: IIpuntProps, ref: LegacyRef<HTMLInputElement>) => {
    return (
        <Container style={containerStyle}>
            <InputContainer>
                <input {...rest} ref={ref as any} />
            </InputContainer>
            {errors &&
                <p className="error">{errors}</p>
            }
        </Container>
    );
});

export default Input;

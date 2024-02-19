import { useForm } from "react-hook-form";
import Input from "../../context/components/Input/index.tsx";
import { Container, ContentRight, ContentLeft } from "./styles.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useEffect } from "react";
import Button from "../../context/components/button/index.tsx";
import useAuthContext from "../../hooks/useAuthContext.ts";
import React from "react";

interface IAuthSchema {
    email: string;
    password: string;

}

// Define el esquema Yup para validación del formulario
const AuthSchema = Yup.object().shape({
    email: Yup.string().required("Usuario obligatorio"),
    password: Yup.string().required("Contraseña obligatoria")
})
// Componente funcional para la pantalla de autenticación
const AuthScreen = () => {
// Utiliza el enlace personalizado useAuthContext para obtener roles y estados de autenticación
    const { handleLogin } = useAuthContext();

    // Utiliza el hook useForm de react-hook-form para administrar el estado del formulario
    const {handleSubmit, formState: {isSubmitting, errors}, setValue, register} = useForm({
        mode: "onTouched", // Establece el modo de validación
        resolver: yupResolver(AuthSchema)  // Utilice Yup como solucionador de validación
    })

    // Define automáticamente el nombre de usuario y la contraseña para realizar pruebas.
    useEffect(() => {
        setValue("email", "kminchelle")
        setValue("password", "0lelplR")
    }, [setValue])
    // Al enviar el formulario, llama a la función onSubmit
    const onSubmit = async (formData: IAuthSchema) => {
        await handleLogin(formData.email, formData.password);
        return;
    }

    return (
        <Container>
            <ContentLeft />
            <ContentRight>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p id="title">Fruteria</p>
                    <Input
                        errors={errors.email ? errors.email.message : null}
                        containerStyle={{
                            marginBottom: 15
                        }}
                        placeholder="Usuario"
                        {...register("email")}
                    />
                    <Input
                        errors={errors.password ? errors.password.message : null}
                        placeholder="Contraseña"
                        type="password"
                        {...register("password")}
                    />
                    <Button
                        style={{
                            marginTop: 15
                        }}
                        text="Entrar"
                        onClick={() => {}}
                        type="submit"
                        isLoading={isSubmitting}
                    />
                </form>
            </ContentRight>        
        </Container>
    )
}
export default AuthScreen;
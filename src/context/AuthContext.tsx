import { createContext, useEffect, useState } from "react";
import * as React from 'react';
import api from "../services/api.ts";
import { isAxiosError } from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { IUser } from '../types/AuthResponse';

// interfaz predeterminada
interface IAuthContext {
  handleLogin(email: string, password: string): Promise<any>;
  userAuthenticated: IUser | null;
}

// crea un contexto con la interfaz predeterminada
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// crea un proveedor para el contexto
const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [userAuthenticated, setUserAuthenticated] = useState<IUser | null>(null)

  useEffect(() => {
    if(window){
      const currentPath = window.location.pathname;
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("userData");
      if(token && userData){
        // usuario logeado
        setUserAuthenticated(JSON.parse(userData));
        // api para validar el token y obtener datos del usuario
      }else{
        if(currentPath !== "/"){
          setUserAuthenticated(null);
          // redirecciona para la pantalla de inicio de sesión  
          window.location.replace("/")
        }
      }
    }
  }, [])

  // función para realizar el login
  const handleLogin = async (email: string, password: string): Promise<any> => {
    // enviar un post para auth/login
    await api.post<IUser>("/auth/login", {
      username: email,
      password
    }).then(({data}) => {
      // usuario logeado
      const { token } = data;
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(data));
      setUserAuthenticated(data);
      toast.success("Login realizado con exito, espere un momento por favor...")
      return window.location.replace("/home")
    }).catch(ex => {
      // error al logear
      if(isAxiosError(ex)){
        // error del axios
        const { message } = ex?.response?.data as any;
        if(message){
          // error del backend
          return toast.error(message)
        }
      }
       // error interno
      toast.error("Internal App Error, contact the support");
    })

    return {} as any;
  }

  return (
    <>
      <AuthContext.Provider value={{
        handleLogin,
        userAuthenticated
      }}>
        {children}
      </AuthContext.Provider>
      <ToastContainer /> {/* Contenedor para mostrar los toast */}
    </>
  )
}

export default AuthProvider;

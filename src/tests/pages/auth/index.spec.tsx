import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import AuthScreen from "../../../pages/auth/index.tsx";
import 'jest-styled-components'
import React from 'react';


describe("Auth Page", () => {
    it("should render auth page", () => {
        render(<AuthScreen />) 
        expect(screen.getByText("Entrar")).toBeInTheDocument(); 
        expect(screen.getByPlaceholderText("Usuário")).toBeInTheDocument(); 
        expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument(); 
    });
});
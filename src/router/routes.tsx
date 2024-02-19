import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

import AuthScreen from '../pages/auth/index.tsx';
import React from 'react';
import Header from '../components/Header.jsx';
import Carrito from '../components/Carrito.jsx'

const Routes = createBrowserRouter([
    {
        path: "/home",
        element: 
        <>
        <Header children={undefined}></Header><Home /> 
        </>
    },
    {
        path: "/carrito",
        element: 
        <>
        <Header children={undefined}></Header><Carrito/>
        </>
    },
    {
        path: "/",
        element: <AuthScreen />
    }
]);

export default Routes;

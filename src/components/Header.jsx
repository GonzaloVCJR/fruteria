import React from "react";
import { NavLink } from 'react-router-dom';
import BotonSesion from "./BotonSesion";


const Header = ({children})=>{
    return (
        <header className="App-header">
            {children}
            <div>
                <h1>Frutería NTTDATA</h1>
            </div>
            <input type="checkbox" name="" id="check"  />
            <label htmlFor="check" className="mostrar-menu">&#9776;</label>
            <nav>
                <ul>
                    <li>
                    <NavLink to='/home' className={'btnMenu'}>Inicio</NavLink>
                    </li>
                </ul>
                <BotonSesion estaLogueado = {true}></BotonSesion>
                <label htmlFor="check"  className="esconder-menu">
                    X
                </label>
            </nav>
        </header>
    )
}

export default Header;
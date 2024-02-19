import React, {useState} from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import store from "../store";
import { observer } from "mobx-react";



const BotonSesion = observer((props)=>{
    const [estaLogueado, setEstaLogueado] = useState(props.estaLogueado);
    const navigate = useNavigate();
    
    
    const StyledButton = styled.button`
        background-color: ${estaLogueado ? 'rgba(0, 200, 0, .5)' : 'blue'};
        color: ${estaLogueado ? 'white' : 'white'};
        padding: 0 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 10px;
        font-size: 1rem;
        font-family: 'Roboto';

        &:hover {
            background-color: ${props=> estaLogueado ? 'orange' : 'lightblue'};
            color: black;
        }
    `
    const [isHighlighted, setIsHighlighted] = useState(false)
    const estilosCarrito = {
        padding: '5px 20px',
        borderRadius: '10px',
        backgroundColor: isHighlighted ? 'lightgreen' : 'rgba(0, 200, 0, .5)',
    }

    const HoverCarritoOn = ()=> {
        setIsHighlighted(true);
    }
    const HoverCarritoOff = ()=>{
        setIsHighlighted(false);
    }

    const handleLogout = () => {
        setEstaLogueado(false);
        navigate('/'); 
    };

    return (
        <div className="btnUsuario">
            <StyledButton className='btnSesion btnMenu' onClick={() => {
                setEstaLogueado(!estaLogueado);
                if (estaLogueado) {
                    handleLogout();
                }
            }}>
                {estaLogueado ? 'Cerrar sesión' : 'Iniciar sesión'}
            </StyledButton>
            {estaLogueado && <NavLink
                title='ir al carrito' 
                className={''}
                to='/carrito' 
                style={estilosCarrito} 
                onMouseOver={HoverCarritoOn}
                onMouseOut={HoverCarritoOff}
            >{store.numberOfProducts} 🛒</NavLink>}
        </div>
    )
})

export default BotonSesion
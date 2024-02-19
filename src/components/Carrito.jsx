import React, { useState } from 'react'
import frutas from "../img/icon-fruits-64.png";
import TableRow from './TableRow';
import { useNavigate } from 'react-router-dom'; // Importa Navigate

// const carritoFrutas = JSON.parse(localStorage.getItem('carritoFrutas')) || [] // Mayus change
// console.log(carritoFrutas)
const Carrito = () => {
    const navigate = useNavigate();


    // eslint-disable-next-line no-unused-vars
    let [carritoFrutas, setCarritoFrutas] = useState(JSON.parse(localStorage.getItem('carritoFrutas')) || [])

    const keyGenerator = ()=>{
        return parseInt(Math.random() * 10_000)
    }
    
    const llenarTabla = ()=>{
        const contenido = []
        carritoFrutas.map(producto=>(
                        contenido.push(<TableRow producto={producto} key={keyGenerator()} />)
                    ))
        return contenido
    }

    const filaVacia = ()=>{
        return (
            <tr>
                <td colSpan={4}>
                    No hay productos en el carrito
                </td>
            </tr>
        )
    }

    const comprarTodo = ()=>{
        setCarritoFrutas = []
        localStorage.clear()
        alert('Realizaste una compra!, los productos están en camino..')
        navigate("/home");
    }

  return (
    <div>
      <img src={frutas} className="canastaDeFrutas" alt="Canasta De Frutas" />
      <section>
            <table>
                <thead>
                    <tr>
                        <th id="tablehead">Producto</th>
                        <th id="tablehead">Descripción</th>
                        <th id="tablehead">Importe</th>
                        <th id="tablehead">Quitar</th>
                    </tr>
                </thead>
                <tbody>
                    {carritoFrutas.length>0 ? llenarTabla() : filaVacia()}
                </tbody>
                <tfoot className="centrar-div">
                    <tr>
                        <td colSpan="4">
                            <button 
                                className="button" 
                                id="btnComprar"
                                onClick={comprarTodo}
                            >COMPRAR</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </section>
    </div>
  )
}

export default Carrito
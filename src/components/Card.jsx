import React from 'react'
import store from '../store';

const Card = (props) => {
  const {id, imagen, nombre, precio} = props.producto

  function agregarProducto(){
      store.addProduct(props.producto)
      props.carritoFrutas.push(props.producto);
      localStorage.setItem('carritoFrutas', JSON.stringify(props.carritoFrutas))
      console.table(props.carritoFrutas)
  }

  return (
        <div className="card">
            <div className="card-image">{imagen}</div>
            <div className="card-name">{nombre}</div>
            <div className="card-price">$ {precio}</div>
            <div className="card-button">
                <button 
                  id={id}
                  className="button button-outline button-add" 
                  title="Clic para agregar al carrito"
                  onClick={agregarProducto}
                >+</button>
            </div>
        </div>
  )
}

export default Card
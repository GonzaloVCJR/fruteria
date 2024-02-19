import store from "../store"

const TableRow = (props) => {
    const {imagen, nombre, precio, id} = props.producto
    const carritoFrutas = JSON.parse(localStorage.getItem('carritoFrutas')) || []

    const eliminarProducto = (id)=>{
        let frutaIndex = carritoFrutas.findIndex( producto => producto.id === id)
        console.log(carritoFrutas)
        carritoFrutas.splice(frutaIndex, 1)
        store.deleteProduct(frutaIndex)
        console.log(carritoFrutas)
        console.log('Eliminando producto: ', id)
        localStorage.setItem('carritoFrutas', JSON.stringify(carritoFrutas))
        window.location.reload()
    }
  return (
        <tr>
            <td className='centrar'>{imagen}</td>
            <td className='centrar'>{nombre}</td>
            <td className='centrar'>{precio}</td>
            <td className='centrar'><button className='btn-eliminar' onClick={()=>eliminarProducto(id)}>❌</button></td>
        </tr>
  )
}

export default TableRow
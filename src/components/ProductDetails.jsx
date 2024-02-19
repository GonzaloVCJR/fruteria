import React from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails(){
    const { id } = useParams();
    return(
        <div>
            <h2>Detalles del producto {id}</h2>
        </div>
    )
}

export default ProductDetails
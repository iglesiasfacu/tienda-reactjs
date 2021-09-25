import './carrito.css';
import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => {
    return (
        <div className='carrito'>
            <h2>Carrito de compras</h2>

            {carrito.length === 0
                ? <p>Carrito vacio</p>

                : carrito.map(item => (
                    <Producto
                        key={item.id}
                        producto={item}
                        carrito={carrito}
                        agregarProducto={agregarProducto}
                    />
                ))}
        </div>
    );
}
 
export default Carrito;
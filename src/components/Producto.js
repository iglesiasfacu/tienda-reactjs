import React from 'react';

const Producto = ({producto, productos, carrito, agregarProducto}) => {
    //destructuracion de objeto
    const {id, nombre, precio} = producto;

    //agregar producto al carrito
    const seleccionarProducto = (id) => {
        const selProd = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            selProd]);
    };

    const eliminarProducto = (id) => {
        const elimProd = carrito.filter(producto => producto.id !== id);
        agregarProducto(elimProd);
    };

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>$ {precio}</p>

            {
                productos
                    ?
                    (
                        <button
                            type='button'
                            onClick={ () => seleccionarProducto(id) }
                            >
                            Comprar
                        </button>
                    )
                    :
                    (
                        <button
                            type='button'
                            onClick={ () => eliminarProducto(id) }
                            >
                            Eliminar
                        </button>
                    )
            }
        </div>
     );
}

export default Producto;
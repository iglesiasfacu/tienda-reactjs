import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //listado de productos de la app
  const [productos] = useState([
    {id:1, nombre:'Remera ReactJS', precio:500},
    {id:2, nombre:'Remera NodeJS', precio:1000},
    {id:3, nombre:'Remera WEPAK', precio:800},
    {id:4, nombre:'Remera Python', precio:900},
  ]);

  //state para carrito de compras
  const [carrito, agregarProducto] = useState([]);

  //obtener fecha actual
  const fecha_actual = new Date().getFullYear();

  return (
    <div className="app">
      <Header
        titulo='Tienda Virtual'
      />

      <h1>Lista de Remeras</h1>
      {productos.map(item => (
        <Producto
          key={item.id}
          producto={item}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer
        fecha={fecha_actual}
      />
    </div>
  );
}

export default App;

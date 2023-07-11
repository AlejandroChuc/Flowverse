import React from 'react';

// Array de cartas
const cartas = [
  {
    id: 1,
    titulo: 'Carta 1',
    imagen: 'ruta-de-la-imagen-1.jpg',
    descripcion: 'Descripción de la carta 1'
  },
  {
    id: 2,
    titulo: 'Carta 2',
    imagen: 'ruta-de-la-imagen-2.jpg',
    descripcion: 'Descripción de la carta 2'
  },
  {
    id: 3,
    titulo: 'Carta 3',
    imagen: 'ruta-de-la-imagen-3.jpg',
    descripcion: 'Descripción de la carta 3'
  }
];

const CatalogoCartas = () => {
    return (
      <div>
        <h1>Catálogo de Cartas</h1>
        <div className="catalogo">
          {cartas.map(carta => (
            <div className="carta" key={carta.id}>
              <img src={carta.imagen} alt={carta.titulo} />
              <h2>{carta.titulo}</h2>
              <p>{carta.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CatalogoCartas;
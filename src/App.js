import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './App.css'; // Nuevo archivo para los estilos generales

const App = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  const animalData = [
    {
      title: 'Mamíferos',
      subitems: [
        {
          title: 'Perros',
          subitems: [
            { title: 'Labrador' },
            { title: 'Bulldog' },
            { title: 'Poodle' },
          ],
        },
        {
          title: 'Gatos',
          subitems: [
            { title: 'Siames' },
            { title: 'Persa' },
            { title: 'Maine Coon' },
          ],
        },
      ],
    },
    {
      title: 'Aves',
      subitems: [
        { title: 'Canario' },
        { title: 'Perico' },
        { title: 'Águila' },
      ],
    },
  ];

  return (
    
    <div className="app-container">
      <h1>Dropdown y contador</h1>
      <div class="cont">
      <Dropdown title="Animales" items={animalData} />
      <div className="number-container">
        <button onClick={handleDecrement}>-</button>
        <div className="number-square">{number}</div>
        <button onClick={handleIncrement}>+</button>
      </div>
      </div>
    </div>
  );
};

export default App;



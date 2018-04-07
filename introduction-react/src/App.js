import React, { Component } from 'react';
import SaludoFuncion from './components/SaludoFuncion.js'
import SaludoClase from './components/SaludoClase.js' 

class App extends Component {
  render() {
    const saludo = <p>hola mundo React</p>
    const arreglos = ["camisa","pantalon","polo","saco"]
  
    return (<div>

          <h3>{saludo}</h3>
          <ul>
            {arreglos.map((item, i) =>
              <li key={i}>{item}</li>
            )}        
          </ul>

          <hr/>
          <h1>Funciones</h1>          
          <SaludoFuncion nombre="Pedro" />
          <SaludoFuncion nombre="Pablo" />
          <hr/>
          <h1>Clases</h1>
          <SaludoClase nombre="Juan" />
          <SaludoClase nombre="Luis" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SaludoFuncion from './components/SaludoFuncion.js'
import SaludoClase from './components/SaludoClase.js' 
import Estado from './components/Estado.js' 
import Formulario from './components/Formulario.js'
import BasicExample from './components/Ruteador.js'

class App extends Component {
  render() {
    const saludo = <p>hola mundo React</p>
    const arreglos = ["camisa","pantalon","polo","saco"]
  
    return (<div>
          <BasicExample />
          <hr/>          
          <h3>{saludo}</h3>
          <ul>
            {arreglos.map((item, i) =>
              <li key={i}>{item}</li>
            )}        
          </ul>

          <hr/>
          <h1>Componente de tipo Funcion</h1>          
          <SaludoFuncion nombre="Pedro" />
          <SaludoFuncion nombre="Pablo" />
          <hr/>
          <h1>Componente de tipo Clase</h1>
          <SaludoClase nombre="Juan" />
          <SaludoClase nombre="Luis" />
          <hr/>
          <h1>Estado</h1>
          <Estado />
          <hr/>
          <h1>Formulario</h1>
          <Formulario />
          <hr/>
      </div>
    );
  }
}

export default App;

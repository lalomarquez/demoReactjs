import React from 'react'

const SaludoFuncion = (props) => {
                            return (<div>
                                    <h3>saludos {props.nombre}</h3>
                                    <p>Nota: Mensaje retornado desde un componente de tipo funcion</p>
                                  </div>)                                  
                           }
                           
export default SaludoFuncion;
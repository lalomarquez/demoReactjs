import React from 'react'

class SaludoClase extends React.Component {
    constructor(props){
        super(props)  
        
        this.state = {
            addNewObject: "MENSAJE ADD, este es un nuevo objeto que ha sido agregado al [state]"
        }
    }

    CambiarState(){
        this.setState({
            addNewObject: "MENSAJE UPDATE, el [state] ha sido cambiado."
        })
    }

    render(){        
        return (<div>
            <h3>saludos {this.props.nombre}</h3>
            <h4>{this.state.addNewObject}</h4>
            <button onClick={this.CambiarState.bind(this)}>cambiar estado del componente</button>
            <p>Nota: Mensaje retornado desde un componente de tipo clase</p>            
          </div>)
    }
}

export default SaludoClase;
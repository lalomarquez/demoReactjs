import React from 'react'

class Formulario extends React.Component {
    constructor(){
        super()  
        
        this.state = {
            nombre: "",
            terminos : false
        }

        this.UpdateName = this.UpdateName.bind(this);
    }

    UpdateName(event){
        this.setState({
            nombre: event.target.value.toUpperCase()
        })
    }

    UpdateTerms(event){
        this.setState({
            terminos: event.target.checked
        })
    }
    
    Saludo(){
        if(this.state.terminos)
            alert('Hola: ' + this.state.nombre);
        else
            alert('Debes de aceptar los TERMINOS pa continuar');
    }

    render(){        
        return (<div>                    
                    <label>textbox:
                    <input type="text" value={this.state.nombre} onChange={this.UpdateName} />                        
                    </label>

                    <div>
                        <input type="checkbox" checked={this.state.terminos} onClick={this.UpdateTerms.bind(this)} />Acepto los Terminos y Condiciones 
                    </div>

                    <button onClick={this.Saludo.bind(this)}>Mensaje</button>
               </div>)
    }
}

export default Formulario;
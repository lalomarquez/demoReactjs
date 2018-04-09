import React from 'react'
import UUID  from 'uuid'

class Estado extends React.Component {
    constructor(){
        super()  
        
        this.state = {
            addArreglo: ["elemento 1","elemento 2","elemento 3"]
        }
        // console.log(UUID())
    }

    AddNewItem(){
        this.setState({
            addArreglo: this.state.addArreglo.concat("new elemento " + UUID())
        })
    }

    // DeleteItem(){
    //     // this.setState({
    //     //     addArreglo: addArreglo.filter((item, i) => index !== i)
    //     // })
    // }

    render(){        
        return (<div>
                    <p>Agregando un arreglo en el [state]</p>
                    <ul>
                        {this.state.addArreglo.map((item, i) =>
                            <li key={i}>{item}</li>
                        )}  
                    </ul>
                    <button onClick={this.AddNewItem.bind(this)}>ADD new elemento</button>
                    {/* <button onClick={this.DeleteItem.bind(this)}>Eliminar elemento</button> */}
               </div>)
    }
}

export default Estado;
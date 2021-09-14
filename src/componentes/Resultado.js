import React, { Component} from 'react';
import Imagen from './Imagen';

class Resultado extends Component {

    mostrarImagenes = () =>{

        const imagenes = this.props.imagenes;

        if (imagenes === undefined) return null;

        console.log(imagenes);

        return(
            <div>
                
                {
                    imagenes.map( imagen => (
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}
                        />
                    ))
                }
            
            </div>
        )
        
}    
    
    render() { 
        return (
                
            <div >
                {this.mostrarImagenes () }    
            </div>
        );
    }
}
 
export default Resultado;
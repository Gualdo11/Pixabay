import React, { Component } from 'react'

//export const Buscador = () => {

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) =>{

        e.preventDefault();

        //Tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        //Lo enviamos al componente principal
        this.props.datosBusqueda(termino);

    }

render ()  {
                return (
                <form onSubmit ={this.obtenerDatos}>
                    <div className="row">
                        <input ref={this.busquedaRef} type="text" className="form-label mt-4 form-control form-control-lg light" placeholder="Busca tu imagen">
                        </input>
                        <input type="submit" className="btn btn-success" value="Buscador"></input>
                    </div>
                </form>
    )}
}

export default Buscador

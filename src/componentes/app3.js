import './App.css';
import Buscador from './componentes/Buscador';
import React, { Component } from 'react'
import Resultado from './componentes/Resultado';


class App extends Component {

  state = {
    termino: ''
  }

  ConsultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=23092213-2ada54f14720b9a893f3f7e4e&q=${termino}`;
    //console.log(url);

    fetch (url)
      .then(respuesta => respuesta.json () )
      .then(resultado => console.log(resultado.hits))

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.ConsultarApi();
    })
    
  }

  render () {return (
    <div className="app container">
      <div className="jumbotron text-center">
        <h1>Mi buscador de imagenes</h1>
      </div>
      <Buscador 
        datosBusqueda={this.datosBusqueda}
      />
      {this.state.termino}
    </div>
  );
}
}

export default App;

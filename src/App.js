import './App.css';
import Buscador from './componentes/Buscador';
import React, { Component } from 'react'
import Resultado from './componentes/Resultado';
import logo from './assets/imagenes/logos.png';


class App extends Component {

  state = {
    termino: ''
  }

//  resultado = []

  ConsultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=23092213-2ada54f14720b9a893f3f7e4e&q=${termino}`;
    //console.log(url);

    fetch (url)
//.then(res=> console.log(res));
      .then(respuesta => respuesta.json())
      //.then(resultado => console.log(resultado))
      .then(imagenes => this.setState({imagenes: imagenes.hits},()=> {console.log('seteado')}))

   /* fetch (url)
      .then(respuesta => {
        this.resultado = respuesta;
        console.log(respuesta.json());
      });*/
      //.then(resultado => console.log(resultado.hit))
      //.then(resultado => this.setState({imagenes : resultado.hit}))


  }

  datosBusqueda = (termino) => {
    this.setState({termino}, () => {
      this.ConsultarApi();
    })
    
  }

  render () {return (
    <div className="app container">
      <div className="jumbotron text-center">
        <h2>Buscador de imágenes Pixabay</h2>
        <div className="logos"><img src={logo} alt="Logos React / Pixabay"/></div>
      </div>
      <Buscador 
        datosBusqueda={this.datosBusqueda}
      />
      <Resultado 
      imagenes={this.state.imagenes}
      />
    </div>
    
  );
}
}

export default App;

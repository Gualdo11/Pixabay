import React from 'react'

const Imagen = (props) => {

        const {largeImageURL, views, previewURL} = props.imagen;

        return (
                <div className="grilla">
                        <div className="card">
                                <img src={previewURL} className="card-img-top"/>
                                <div className="card-body">
                                        <p className="card-text">{views} Vistas</p>
                                        <a href={largeImageURL} target="_blank">Ver imágen</a>
                                </div>
                        </div>
                </div>
        )
}

export default Imagen;

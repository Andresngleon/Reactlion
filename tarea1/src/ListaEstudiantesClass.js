import React, { Component } from "react";

export class ListaEstudiantesClass extends Component {
  render() {
    const { listaEstudiantes } = this.props;
    return (
      <React.Fragment>
        {listaEstudiantes.map((estudiante) => (
          // recordatorio siempre poner key cuando se recorre un arreglo
          <li key={estudiante.nombre}> 
            <h4><i>Nombre</i>: {estudiante.nombre}</h4>
            <p><i>Apellido</i>: {estudiante.apellido}</p>
            <p><i>Edad</i>: {estudiante.edad}</p>
          </li>
        ))}
      </React.Fragment>
    );
  }
}
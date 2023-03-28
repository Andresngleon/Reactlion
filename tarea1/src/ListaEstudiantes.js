import React from "react";

export const ListaEstudiantes = ({ listaEstudiantes }) => {
  return (
    <React.Fragment>
      {listaEstudiantes.map((estudiante) => (
        <li key={estudiante.nombre}>
          <h4><b>Nombre</b>: {estudiante.nombre}</h4>
          <p><b>Apellido</b>: {estudiante.apellido} </p>
          <p><b>Edad</b>: {estudiante.edad}</p>
        </li>
      ))}
    </React.Fragment>
  );
};
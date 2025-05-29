import React from "react";
import Formulario from '../Formulario';

export default function NuevasReservas({datos, setDatos}) {
  return (
      <div>
        <h2>Nuevas Reservas</h2>
        <Formulario datos={datos} setDatos={setDatos} />
    </div>
  )
}

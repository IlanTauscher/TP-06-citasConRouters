import React from "react";
import Listado from '../Listado';

export default function MisCitas({datos, setDatos}) {
  return (
    <div className="citas">
      <h2>Mis Citas</h2>
      <Listado datos={datos} setDatos={setDatos} />
    </div>
  )
}

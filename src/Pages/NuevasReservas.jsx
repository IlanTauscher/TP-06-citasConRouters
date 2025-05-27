import Formulario from './Formulario';

export default function NuevasReservas() {
  return (
      <div>
        <h2>Nuevas Reservas</h2>
        <Formulario datos={datos} setDatos={setDatos} />
    </div>
  )
}

import Listado from './Listado';

export default function MisCitas() {
  return (
    <div>
      <h2>Mis Citas</h2>
      <Listado datos={datos} setDatos={setDatos} />
    </div>
  )
}

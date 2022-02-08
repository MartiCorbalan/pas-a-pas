export default function Estacio({ estacio }) {
  return (
    <div>
      Estacio {estacio.nom}
      <br />
      Avui {estacio.fa} <br />
      La temperatura: {estacio.temp}º
    </div>
  );
}

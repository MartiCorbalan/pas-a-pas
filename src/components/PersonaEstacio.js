import Estacio from "./Estacio";
import Hola from "./Hola";

export default function PersonaEstacio({ nom, estacio }) {
  return (
    <>
      <Hola nom={nom} />
      <Estacio estacio={estacio} />
    </>
  );
}

import "./App.css";
import PersonaEstacio from "./components/PersonaEstacio";

let josep = "Martí";
let bcn = {
  nom: "Barcelona",
  fa: " a Bcn fa nuvol",
  temp: 15,
};
let peter = "Peter";
let londres = {
  nom: "Londresss",
  fa: " a Londres plou",
  temp: 7,
};

export default function App() {
  return (
    <div>
      <PersonaEstacio nom={josep} estacio={bcn} />
      <PersonaEstacio nom={peter} estacio={londres} />
      <br />

      <br />
    </div>
  );
}


import { Routes, Route } from "react-router-dom";
import Calculadora from "./Calculadora/calculadora";
import Ingressos from "./ingresso/ingresso";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculadora />} />
      <Route path="/ingresso" element={<Ingressos />} />
    </Routes>
  );
}

export default App;

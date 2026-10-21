import { Routes, Route } from "react-router-dom";
import Calculadora from "./Calculadora/calculadora";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculadora />} />
    </Routes>
  );
}

export default App;
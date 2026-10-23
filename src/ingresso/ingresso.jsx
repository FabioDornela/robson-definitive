
import { useState } from "react";
import "./ingresso.scss";

const PRECO_INGRESSO = 30;

export default function Ingressos() {
  const [qtd, setQtd] = useState(1);
  const [meia, setMeia] = useState(false);
  const [cupom, setCupom] = useState("");
  const [total, setTotal] = useState("");

  function calcularTotal() {
    let valor = PRECO_INGRESSO;

    if (meia) {
      valor = valor / 2;
    }

    if (cupom === "20porcento") {
      valor = valor * 0.8;
    } else if (cupom === "50porcento") {
      valor = valor * 0.5;
    } else if (cupom === "100porcento") {
      valor = 0;
    }

    setTotal((valor * qtd).toFixed(2));
  }

  return (
    <div className="ingresso">
      <h1>Calculadora de Ingressos</h1>

      <label>Quantidade de ingressos:</label>
      <input
        type="number"
        min="1"
        value={qtd}
        onChange={(e) => setQtd(Number(e.target.value))}
      />

      <br />

      <label>
        <input
          type="checkbox"
          checked={meia}
          onChange={(e) => setMeia(e.target.checked)}
        />
        Meia-entrada
      </label>

      <br />

      <label>Cupom de desconto:</label>
<input
  type="text"
  placeholder="Digite seu cupom"
  value={cupom}
  onChange={(e) => setCupom(e.target.value)}
/>


      <br />

      <button onClick={calcularTotal}>
        Calcular total
      </button>

      <h2>Total: R$ {total}</h2>
    </div>
  );
}

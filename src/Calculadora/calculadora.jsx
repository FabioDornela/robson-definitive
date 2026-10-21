import { useState } from "react";
import "./calculadora.scss";

function Calculadora() {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [resultado, setResultado] = useState("");

    function somar() {
        setResultado(Number(n1) + Number(n2));
    }

    function subtrair() {
        setResultado(Number(n1) - Number(n2));
    }

    function multiplicar() {
        setResultado(Number(n1) * Number(n2));
    }

    function dividir() {
        setResultado(Number(n1) / Number(n2));
    }

    return (
        <div className="pai">

            <h1>Calculadora</h1>

            <input
                type="number"
                value={n1}
                onChange={(e) => setN1(e.target.value)}
            />

            <input
                type="number"
                value={n2}
                onChange={(e) => setN2(e.target.value)}
            />

            <div className="botoes">
                <button onClick={somar}>Somar</button>
                <button onClick={subtrair}>Subtrair</button>
                <button onClick={multiplicar}>Multiplicar</button>
                <button onClick={dividir}>Dividir</button>
            </div>

            <h2>Resultado: {resultado}</h2>

        </div>
    );
}

export default Calculadora;
"use client";

import { useState } from "react";

export default function Entrada() {
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [horarioEntrada, setHorarioEntrada] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você pode salvar os dados no localStorage ou enviar para uma API
    const entrada = { placa, modelo, horarioEntrada: new Date().toLocaleString() };
    let entradas = JSON.parse(localStorage.getItem("entradas")) || [];
    entradas.push(entrada);
    localStorage.setItem("entradas", JSON.stringify(entradas));

    // Limpar o formulário
    setPlaca("");
    setModelo("");
    setHorarioEntrada("");

    alert("Veículo registrado com sucesso!");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Registrar Entrada de Veículo</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Placa do Veículo:</label>
          <input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Modelo do Veículo:</label>
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Registrar
        </button>
      </form>
    </div>
  );
}

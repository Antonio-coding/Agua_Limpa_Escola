// src\components\ResultPage\index.jsx

import React from "react";
import { useParams } from "react-router-dom";

const ResultPage = () => {
  const { option } = useParams();

  // Aqui você pode fazer a chamada à API ou lógica necessária para obter os dados correspondentes à opção selecionada
  // e renderizar a página de resultados.

  return (
    <div>
      <h1>Resultados para {option}</h1>
      {/* Renderize os dados correspondentes à opção selecionada */}
    </div>
  );
};

export default ResultPage;

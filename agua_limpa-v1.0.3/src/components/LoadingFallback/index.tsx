import React from "react";
import styled, { keyframes } from "styled-components";

// Defina a animação de rotação
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Estilo para o círculo giratório
const Spinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 6px solid #2d73b5;
  border-radius: 50%;
  border-top: 4px solid #ffffff;
  animation: ${spinAnimation} 1s linear infinite;
`;

// Estilo para o texto abaixo do círculo
const Text = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

// Componente de Fallback
const LoadingFallback = () => (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <Spinner />
        <Text>Loading...</Text>
      </div>
    </div>
  );
  

export default LoadingFallback;

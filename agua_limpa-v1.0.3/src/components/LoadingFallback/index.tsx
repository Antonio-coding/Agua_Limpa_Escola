import React from "react";

// Estilo para o círculo giratório
const Spinner = () => (
  <div className="inline-block w-12 h-12 border-6 border-t-8 border-blue-800 border-solid rounded-full animate-spin"></div>
);

// Estilo para o texto abaixo do círculo
const Text = () => <div className="mt-4 font-bold">Loading...</div>;

// Componente de Fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col items-center">
      <Spinner />
      <Text />
    </div>
  </div>
);

export default LoadingFallback;

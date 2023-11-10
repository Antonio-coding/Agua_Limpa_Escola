import React from "react";
import Mapa from "./img/mapaBrasil.min.svg"; // Certifique-se de usar o caminho correto para a imagem
import Image from "next/image";

export const Carrousel: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Use dados.</h2>
          <h2>Transforme a educação através da água</h2>
        </div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Buscar por escolas, cidade ou estado"
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
      </div>
      <div>
        <div>
          <Image src={Mapa} alt="Mapa represenato o Brasil" />
        </div>
        <div>
          <h2>Teste</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

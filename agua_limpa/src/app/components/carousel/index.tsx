import React from "react";
import Mapa from "public/assents/mapaBrasil.min.svg";
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
          <input
            type="text"
            placeholder="Buscar por escolas, cidade ou estado"
          />
          <button type="submit">Buscar</button>
        </div>
      </div>
      <div>
        <div>
          <Image
            src={Mapa}
            alt="Mapa represenato o Brasil"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h2>Voce Sabia?</h2>
          <p>Mais de 8.000 escolas no Brasil não têm acesso a água potável </p>
          <p>
            Levantamento feito com base no Censo Escolar mostra que mais de 14
            milhões de alunos sofrem com a falta de estrutura escolar.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

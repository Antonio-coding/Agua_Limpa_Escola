import React, { Component } from "react";
import Mapa from "public/assents/mapaBrasil.min.svg";
import Image from "next/image";


export const Carrousel: React.FC = () => {
  return (
    <div>
      <div>
        <div>
        <div className="rela w-[1280px] h-[477px] top-[75px] left-0 bg-[#f5f7fa]">
          <div className="rela w-[468px] h-[431px] top-[23px] left-[740px]  bg-cover bg-[50%_50%]">
            <div className="relative w-[371px] h-[174px] top-[136px] left-[79px]">
              <div className="relative w-[363px] h-[174px] bg-white rounded-[10px] border border-solid border-[#2d73b5] shadow-[0px_4px_4px_#00000040]">
                <div className="rela h-[17px] top-[15px] left-[40px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[16px] tracking-[0] leading-[16.7px] whitespace-nowrap">
                  Você sabia?
                </div>              
                <img
                  className="rela w-[19px] h-[19px] top-[13px] left-[16px] object-cover"
                  alt="Mapa represenato o Brasil"
                  src={Mapa}
                />
                <div className="rela w-[331px] h-[114px] top-[48px] left-[17px]">
                  <div className="rela h-[17px] top-[93px] left-[248px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[12px] tracking-[0] leading-[16.7px] whitespace-nowrap">
                    Saiba mais
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

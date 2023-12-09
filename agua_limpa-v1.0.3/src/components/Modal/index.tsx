import { Line } from "components/Line";
import React, { useState } from "react";
interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute modal-overlay 	">
          <div className="absolute modal-content 	">
            <div className="inline-flex flex-col items-start gap-[10px] relative 	">
              <div className="relative h-[331px] w-[363px]  bg-slate-50	 border border-solid border-[#2d73b5] shadow-[0px_4px_4px_#00000040] rounded-[10px]">
                <div className="absolute h-[57px] top-0 left-0 bg-[#2d73b5] w-[363px] rounded-[10px]">
                  <div className="absolute h-[17px] top-[0px] left-[17px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
                    ANO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; TIPOS
                    DE ESCOLAS
                    <button
                      className=" top-0 right-0 m-4 p-2  text-white [font-family:'Inter-SemiBold',Helvetica] cursor-pointer"
                      onClick={onRequestClose}
                    >
                      X
                    </button>
                  </div>
                </div>
                <div className="absolute h-[30px] top-[124px] left-[28px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[32px] tracking-[0] leading-[29.7px] whitespace-nowrap">
                  2022
                </div>
                <div className="flex flex-col w-[100%] h-[167px] items-start gap-[16px]">
                  <div className="absolute h-[30px] top-[89px] left-[265px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
                    <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
                      Federais
                      <br />
                    </span>
                    26
                  </div>
                  <div className="top-[131px] left-[261px] absolute h-[30px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
                    <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
                      Estaduais
                      <br />
                    </span>
                    1.056
                  </div>
                  <div className="top-[179px] left-[261px] absolute h-[30px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
                    <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
                      Municipais
                      <br />
                    </span>
                    4.995
                  </div>
                  <div className="top-[219px] left-[262px] absolute h-[30px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
                    <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
                      Privadas
                    </span>
                    2.272
                  </div>
                </div>

                <div className="absolute w-[163px] h-[33px] top-[286px] left-[101px]">
                  <button
                    className="absolute h-[30px] top-[3px] left-[33px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap  cursor-pointer"
                    onClick={() =>
                      (window.location.href = "/caminho-da-pagina-do-grafico")
                    }
                  >
                    Exibir Gráfico
                  </button>
                  <img
                    className="absolute w-[26px] h-[26px] top-0 left-0 object-cover"
                    alt="Design sem nome"
                    src="images/img_grafico_icon.svg"
                  />
                </div>
                <Line className="shadow-[5px_4px_4px_#00000040]    absolute bg-blue_gray-100  w-[306px] top-[280px] right-[7px] h-px" />
              </div>
            </div>

            {/* Fim do seu conteúdo do modal */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

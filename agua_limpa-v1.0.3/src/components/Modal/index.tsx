import React from "react";

export const Modal = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start gap-[10px] relative">
      <div className="relative h-[331px] bg-white border border-solid border-[#2d73b5] shadow-[0px_4px_4px_#00000040] w-[363px] rounded-[10px]" />
      <div className="absolute h-[57px] top-0 left-0 bg-[#2d73b5] w-[363px] rounded-[10px]" />
      <div className="absolute h-[30px] top-[12px] left-[47px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
        ANO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; TIPOS DE ESCOLAS
      </div>
      <div className="absolute h-[30px] top-[124px] left-[28px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[32px] tracking-[0] leading-[29.7px] whitespace-nowrap">
        2022
      </div>
      <div className="absolute h-[30px] top-[89px] left-[265px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
        26
      </div>
      <div className="top-[131px] left-[261px] absolute h-[30px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
        1.056
      </div>
      <div className="top-[179px] left-[261px] absolute h-[30px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
        4.995
      </div>
      <div className="top-[219px] left-[262px] absolute h-[30px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
        2.272
      </div>
      <div className="absolute w-[163px] h-[33px] top-[286px] left-[101px]">
        <div className="absolute h-[30px] top-[3px] left-[33px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px] whitespace-nowrap">
          Exibir gráfico
        </div>
        <img
          className="absolute w-[26px] h-[26px] top-0 left-0 object-cover"
          alt="Design sem nome"
          src="design-sem-nome-7-1.png"
        />
      </div>
      <div className="flex flex-col w-[105px] h-[167px] items-start gap-[16px]">
        <p className="relative self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
          <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
            Federais
            <br />
          </span>
        </p>
        <p className="relative self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
          <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
            Estaduais
            <br />
          </span>
        </p>
        <p className="relative self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
          <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
            Municipais
            <br />
          </span>
        </p>
        <p className="relative self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
          <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#2d73b5] text-[20px] tracking-[0] leading-[29.7px]">
            Privadas
          </span>
        </p>
      </div>
      <img className="absolute w-[314px] h-[9px] top-[270px] left-[30px] object-cover" alt="Line" src="line-2.svg" />
    </div>
  );
};



import React from "react";

import { Img, SelectBox } from "components";
import { useNavigate } from "react-router-dom";

type HomePageOneColumnoquevocdesejaProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "oquevocdeseja"
> &
  Partial<{ oquevocdeseja: string }>;

const pesquisaOptionsList = [
  { label: "Porcentagem de escolas com água potável", value: "percentagem_escolas_com_agua_potavel", icon: "water" },
  { label: "Porcentagem de escolas com água fornecida pelo sistema público", value: "percentagem_escolas_com_agua_publica", icon: "water-supply" },
  { label: "Porcentagem de escolas com esgoto fornecido pelo sistema público", value: "percentagem_escolas_com_esgoto_publico", icon: "sewer" },
  { label: "Quantidade de escolas por mesorregião", value: "quantidade_escolas_por_mesorregiao", icon: "school-building" },
  { label: "Número de escolas em cada mesorregião que possui sistema de esgoto inexistente", value: "escolas_com_esgoto_inexistente_por_mesorregiao", icon: "sewer" },
  { label: "Número de escolas em cada mesorregião que possui sistema de água inexistente", value: "escolas_com_agua_inexistente_por_mesorregiao", icon: "water-supply" },
  { label: "Distribuição de escolas por tipo de sistema de esgoto", value: "distribuicao_escolas_por_tipo_esgoto", icon: "sewer" },
  { label: "Distribuição de escolas por tipo de sistema de água", value: "distribuicao_escolas_por_tipo_agua", icon: "water-supply" },
];

// Adicione os ícones correspondentes a cada opção de pesquisa.


  
const HomePageOneColumnoquevocdeseja: React.FC<  HomePageOneColumnoquevocdesejaProps
> = (props) => {
  const navigate = useNavigate();

  const handleOptionChange = (selectedOption: any) => {
    // Quando a opção é alterada, navegue para a rota correspondente
    navigate(`/result/${selectedOption.value}`);
  };
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[18px] items-end justify-start w-auto sm:w-full">
          <SelectBox
            className="txtInterSemiBold28"
            placeholderClassName="sm:text-2xl md:text-[26px] text-[28px] text-blue-800 w-auto "
            indicator={
              <Img
                className="h-[11px] w-[15px]  items-end justify-start"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            }
            isMulti={false}
            name="groupFortyTwo"
            options={pesquisaOptionsList}
            isSearchable={false}
            placeholder={props?.oquevocdeseja}
            onChange={handleOptionChange} 

          />
        </div>
      </div>
    </>
  );
};

HomePageOneColumnoquevocdeseja.defaultProps = {
  oquevocdeseja: "O que você deseja saber ?",
};

export default HomePageOneColumnoquevocdeseja;

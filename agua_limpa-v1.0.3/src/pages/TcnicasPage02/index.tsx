import React from "react";

import { Button, Img, Radio, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const depoimentosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TcnicasPage02Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <Text
            className="ml-28 md:ml-[0] mt-[136px] sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
            size="txtInterSemiBold28"
          >
            Água Potável para Todos: Métodos Simples e Caseiros
          </Text>
          <Text
            className="leading-[19.00px] ml-28 md:ml-[0] mt-[59px] text-[15px] text-black-900"
            size="txtInterRegular15"
          >
            <>
              1 - Filtragem Inicial:
              <br />
              Utilize tecidos ou panos limpos para a remoção inicial de
              partículas sólidas da água.
            </>
          </Text>
          <Text
            className="leading-[19.00px] ml-28 md:ml-[0] text-[15px] text-black-900"
            size="txtInterRegular15"
          >
            <>
              2 - Decantação Natural:
              <br />
              Permita que a água repouse em recipientes largos para que as
              impurezas sedimentem no fundo.
            </>
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[94px] items-end justify-start max-w-[1057px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="leading-[19.00px] text-[15px] text-black-900"
                size="txtInterRegular15"
              >
                <>
                  3 - Fervura Eficiente:
                  <br />
                  Ferva a água por pelo menos 5 minutos para assegurar a
                  eliminação de microorganismos prejudiciais.
                </>
              </Text>
              <Text
                className="leading-[19.00px] text-[15px] text-black-900"
                size="txtInterRegular15"
              >
                <>
                  4 - Cloração Segura:
                  <br />
                  Adicione algumas gotas de água sanitária por litro, agite e
                  aguarde 30 minutos antes do consumo.
                </>
              </Text>
              <Text
                className="leading-[19.00px] text-[15px] text-black-900"
                size="txtInterRegular15"
              >
                <>
                  5 - Método SODIS (Desinfecção Solar):
                  <br />
                  Utilize garrafas transparentes e exponha a água ao sol por 6
                  horas para desinfecção solar.
                </>
              </Text>
              <Text
                className="leading-[19.00px] text-[15px] text-black-900"
                size="txtInterRegular15"
              >
                <>
                  6 - Filtro Caseiro:
                  <br />
                  Crie um filtro improvisado com camadas de areia grossa, areia
                  fina e carvão ativado para remoção de impurezas.
                </>
              </Text>
            </div>
            <Img
              className="h-[318px] mb-0.5 md:mt-0 mt-[51px] w-[318px]"
              src="images/img_waterdropbro1.svg"
              alt="waterdropbroOne"
            />
          </div>
          <Text
            className="leading-[19.00px] ml-28 md:ml-[0] text-[15px] text-black-900"
            size="txtInterRegular15"
          >
            <>
              7 - Poder das Sementes de Moringa:
              <br />
              Triture sementes de moringa na água para suas propriedades
              coagulantes naturais, permitindo a decantação e filtração.
            </>
          </Text>
          <Text
            className="leading-[19.00px] ml-28 md:ml-[0] text-[15px] text-black-900"
            size="txtInterRegular15"
          >
            <>
              8 - Desinfecção com Luz Ultravioleta:
              <br />
              Em áreas com acesso mínimo a recursos, considere dispositivos de
              luz ultravioleta para desinfecção.
            </>
          </Text>
          <Text
            className="leading-[26.00px] md:ml-[0] ml-[120px] mt-[13px] text-[15px] text-black-900 w-1/2 sm:w-full"
            size="txtInterSemiBold15"
          >
            Lembre-se, essas soluções simples são passos iniciais para garantir
            acesso à água potável em situações desafiadoras, mas a colaboração
            com organizações locais é essencial para implementar soluções mais
            sustentáveis e de longo prazo.
          </Text>
          <div className="bg-gray-100 flex flex-col items-start justify-start mt-[74px] p-[50px] md:px-10 sm:px-5 w-full">
            <Text
              className="mb-[436px] md:ml-[0] ml-[55px] sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
              size="txtInterSemiBold28"
            >
              Saiba mais
            </Text>
          </div>
          <Footer className="bg-blue-800 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default TcnicasPage02Page;

import React from "react";

import { Button, Img, Radio, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const depoimentosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TcnicasPage02Page: React.FC = () => (
  <>
    <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
      <div className="flex flex-col justify-start w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <Text
          className="ml-28 md:ml-[0] mt-[136px] sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
          size="txtInterSemiBold28"
        >
          Água Potável para Todos: Métodos Simples e Caseiros
        </Text>
        <Text
          className="leading-[19.00px] font-bold ml-28 md:ml-[0] mt-[59px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            1 - Filtragem Inicial:
          </>
        </Text>
        <Text
          className="leading-[19.00px] ml-40 md:ml-[0] mt-[15px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            <ul className="list-disc">
              <li>
                Utilize tecidos ou panos limpos para a remoção inicial de
                partículas sólidas da água.
              </li>
            </ul>
          </>
        </Text>
        <Text
          className="leading-[19.00px] ml-28 font-boldmd:ml-[0] mt-[20px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            2 - Decantação Natural:
          </>
        </Text>
        <Text
          className="leading-[19.00px] ml-40 md:ml-[0] mt-[15px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            <ul className="list-disc">
              <li>
                Permita que a água repouse em recipientes largos para que as
                impurezas sedimentem <br/>no fundo.
                </li>
            </ul>
          </>
        </Text>
        <Text
          className="leading-[19.00px] font-bold ml-28 md:ml-[0] mt-[20px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            3 - Fervura Eficiente:
          </>
        </Text>
        <Text
          className="leading-[19.00px] ml-40 md:ml-[0] mt-[15px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            <ul className="list-disc">
              <li>
                Ferva a água por pelo menos 5 minutos para assegurar a
                eliminação de <br/>microorganismos prejudiciais.
              </li>
            </ul>
          </>
        </Text>
        <Text
          className="leading-[19.00px] font-bold  ml-28 md:ml-[0] mt-[20px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            4 - Cloração Segura:
          </>
        </Text>
        <Text
          className="leading-[19.00px] ml-40 md:ml-[0] mt-[15px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            <ul className="list-disc">
              <li>
                Adicione algumas gotas de água sanitária por litro, agite e
                aguarde 30 minutos antes do <br/>consumo.
              </li>
            </ul>
          </>
        </Text>

        <Text
          className="leading-[19.00px] font-bold ml-28 md:ml-[0] mt-[20px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            5 - Método SODIS (Desinfecção Solar):
          </>
        </Text>
        <Text
          className="leading-[19.00px]  ml-40 md:ml-[0] mt-[15px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            <ul className="list-disc">
              <li>
                Utilize garrafas transparentes e exponha a água ao sol por 6
                horas para desinfecção <br/>solar.
              </li>
            </ul>
          </>
        </Text>
        <Text
          className="leading-[19.00px] font-bold ml-28 md:ml-[0] mt-[20px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            6 - Filtro Caseiro:
          </>
        </Text>
        <Text
          className="leading-[19.00px] ml-40 md:ml-[0] mt-[15px] text-[15px] text-black-900"
          size="txtInterRegular15"
        >
          <>
            <ul className="list-disc">
              <li>
                Crie um filtro improvisado com camadas de areia grossa, areia
                fina e carvão ativado <br/>para remoção de impurezas.
              </li>
            </ul>
          </>
        </Text>
      </div>

    </div>
    <Text
      className="leading-[19.00px] font-bold ml-28 md:ml-[0] mt-[20px] text-[15px] text-black-900"
      size="txtInterRegular15"
    >
      <>
        7 - Poder das Sementes de Moringa:
      </>
    </Text>
    <Text
      className="leading-[19.00px] ml-40 md:ml-[0] mt-[15px] text-[15px] text-black-900"
      size="txtInterRegular15"
    >
      <>
        <ul className="list-disc">
          <li>
            Triture sementes de moringa na água para suas propriedades
            coagulantes naturais, <br/>permitindo a decantação e filtração.
          </li>
        </ul>
      </>
    </Text>
    <Text
      className="leading-[19.00px] font-bold ml-28 md:ml-[0] mt-[20px] text-[15px] text-black-900"
      size="txtInterRegular15"
    >
      <>
        8 - Desinfecção com Luz Ultravioleta:
      </>
    </Text>
    <Text
      className="leading-[19.00px] ml-40 md:ml-[0] mt-[15px] text-[15px] text-black-900"
      size="txtInterRegular15"
    >
      <>
        <ul className="list-disc">
          <li>
            Em áreas com acesso mínimo a recursos, considere dispositivos de
            luz ultravioleta para <br/>desinfecção.
          </li>
        </ul>
      </>
    </Text>
    <Text
      className="leading-[26.00px] font-bold md:ml-[0] ml-[110px] mt-[68px] text-[15px] text-black-900 w-1/2 sm:w-full"
      size="txtInterSemiBold15"
    >
      Lembre-se, essas soluções simples são passos iniciais para garantir
      acesso à água potável em situações desafiadoras, mas a colaboração
      com organizações locais é essencial para implementar soluções mais
      sustentáveis e de longo prazo.
    </Text>

    <div className="flex md:flex-col flex-row md:gap-10 gap-[94px] items-end justify-start max-w-[1057px] mx-auto md:px-5 w-full">
      <div className="flex flex-col items-center justify-start">

        <Img
          className="h-[318px] flex flex-row ml-[62.5rem] mb-[300px] md:mt-0 mt-[-650px] w-[318px]"
          src="images/img_waterdropbro1.svg"
          alt="waterdropbroOne" />


      </div>

    </div>
    <div className="bg-gray-100 flex flex-col items-start justify-start mt-[74px] p-[50px] md:px-10 sm:px-5 w-full">
      <Text
        className="mb-[436px] w-full md:ml-[0] ml-[55px] sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
        size="txtInterSemiBold28"
      >
        Saiba mais
      </Text>     
    </div>
    <Footer className="bg-blue-800 flex items-center justify-center md:px-5 w-full" />
  </>
);

export default TcnicasPage02Page;

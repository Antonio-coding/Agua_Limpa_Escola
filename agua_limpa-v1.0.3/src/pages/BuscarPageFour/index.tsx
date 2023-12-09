import React from "react";

import { Button, Img, Line, Radio, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const BuscarPageFourPage: React.FC = () => {
  return (
    <>
<Header className="flex flex-col items-center justify-center md:px-5 w-full" />      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1082px] mt-[61px] mx-auto p-[23px] md:px-5 shadow-bs1 w-full">
            <div className="flex flex-row gap-4 items-end justify-start w-[17%] md:w-full">
              <Img
                className="h-[54px] md:h-auto object-cover w-[54px]"
                src="images/img_designsemnome_54x54.png"
                alt="designsemnome"
              />
              <div className="flex flex-col items-start justify-start mb-1 mt-[9px]">
                <Text
                  className="text-base text-black-900"
                  size="txtInterMedium16"
                >
                  Escolas
                </Text>
                <Text
                  className="text-base text-gray-500"
                  size="txtInterRegular16"
                >
                  Pernambuco
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1082px] mt-[43px] mx-auto p-[34px] md:px-5 shadow-bs1 w-full">
            <div className="flex flex-col items-start justify-start mb-3.5 mt-[5px] w-[76%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between md:ml-[0] ml-[5px] w-[96%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-base text-blue-800"
                    size="txtInterMedium16Blue800"
                  >
                    Informações
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-6 text-base text-blue-800"
                    size="txtInterMedium16Blue800"
                  >
                    Nome
                  </Text>
                  <Text
                    className="mt-1 text-base text-black-900"
                    size="txtInterMedium16"
                  >
                    ESCOLA CASA DA CRIANCA ORLANE SAMPAIO LUSTOSA
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:mt-0 mt-[50px]">
                  <Text
                    className="text-base text-blue-800"
                    size="txtInterMedium16Blue800"
                  >
                    UF
                  </Text>
                  <Text
                    className="text-base text-black-900"
                    size="txtInterMedium16"
                  >
                    PE
                  </Text>
                </div>
                <div className="sm:h-6 h-[49px] md:h-[71px] sm:mt-0 mt-[51px] relative w-[12%] sm:w-full">
                  <Text
                    className="absolute left-[0] text-base text-blue-800 top-[0]"
                    size="txtInterMedium16Blue800"
                  >
                    Munícipio
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-black-900 w-max"
                    size="txtInterMedium16"
                  >
                    PARNAMIRIM
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[7px] mt-[33px] w-[96%] md:w-full">
                <Text
                  className="text-base text-blue-800"
                  size="txtInterMedium16Blue800"
                >
                  Mesorregião
                </Text>
                <Text
                  className="md:ml-[0] ml-[100px] text-base text-blue-800"
                  size="txtInterMedium16Blue800"
                >
                  Localização
                </Text>
                <Text
                  className="ml-14 md:ml-[0] text-base text-blue-800"
                  size="txtInterMedium16Blue800"
                >
                  Dependência
                </Text>
                <Text
                  className="md:ml-[0] ml-[75px] text-base text-blue-800"
                  size="txtInterMedium16Blue800"
                >
                  Situação de funcionamento
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-1.5 md:ml-[0] mt-0.5 w-[83%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtInterMedium16"
                >
                  Sertão Pernambucano
                </Text>
                <Text
                  className="md:ml-[0] ml-[26px] text-base text-black-900"
                  size="txtInterMedium16"
                >
                  URBANA
                </Text>
                <Text
                  className="ml-20 md:ml-[0] text-base text-black-900"
                  size="txtInterMedium16"
                >
                  PARNAMIRIM
                </Text>
                <Text
                  className="md:ml-[0] ml-[72px] text-base text-black-900"
                  size="txtInterMedium16"
                >
                  EM ATIVIDADE
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start ml-1.5 md:ml-[0] mt-[26px] w-[21%] md:w-full">
                <Img className="h-6 w-6" src="images/img_call.svg" alt="call" />
                <a
                  href="tel://8738831063"
                  className="font-medium text-base text-black-900 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>(87) 3883-1063</Text>
                </a>
              </div>
              <Line className="bg-blue_gray-100 h-px mt-14 w-full" />
              <Text
                className="md:ml-[0] ml-[5px] mt-[21px] text-base text-blue-800"
                size="txtInterMedium16Blue800"
              >
                Sistema de água
              </Text>
              <div className="flex flex-row gap-3.5 items-center justify-start mt-[11px] w-[12%] md:w-full">
                <Img
                  className="h-[47px] md:h-auto object-cover w-[47px]"
                  src="images/img_designsemnome_47x47.png"
                  alt="designsemnome_One"
                />
                <Text
                  className="text-base text-black-900"
                  size="txtInterMedium16"
                >
                  SIM
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px mt-7 w-full" />
              <Text
                className="md:ml-[0] ml-[5px] mt-[25px] text-base text-blue-800"
                size="txtInterMedium16Blue800"
              >
                Sistema de Esgoto
              </Text>
              <div className="flex flex-row gap-3.5 items-center justify-start mt-[11px] w-[13%] md:w-full">
                <Img
                  className="h-[47px] md:h-auto object-cover w-[47px]"
                  src="images/img_designsemnome_3.png"
                  alt="designsemnome_Two"
                />
                <Text
                  className="text-base text-black-900"
                  size="txtInterMedium16"
                >
                  NÃO
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1082px] mt-[42px] mx-auto p-[34px] md:px-5 shadow-bs1 w-full">
            <div className="flex flex-col gap-[23px] items-start justify-start mb-[17px] w-[99%] md:w-full">
              <Text className="text-blue-800 text-xl" size="txtInterBold20">
                Infraestrutura
              </Text>
              <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-gray-100 h-[152px] md:h-[85px] p-4 relative rounded-lg w-full">
                  <Img
                    className="absolute h-[85px] left-[29%] object-cover top-[11%] w-[85px]"
                    src="images/img_56.png"
                    alt="FiftySix"
                  />
                  <Text
                    className="absolute bottom-[26%] right-[8%] text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Escola com Acessibilidade
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col gap-2.5 items-center justify-end p-5 rounded-lg w-full">
                  <Img
                    className="h-16 md:h-auto object-cover w-16"
                    src="images/img_61.png"
                    alt="SixtyOne"
                  />
                  <Text
                    className="text-[15px] text-black-900 text-center"
                    size="txtInterRegular15"
                  >
                    <>
                      Dependências com
                      <br />
                      Acessibilidade
                    </>
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col gap-[9px] items-center justify-start p-[21px] sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[65px] md:h-auto object-cover w-[65px]"
                    src="images/img_72.png"
                    alt="SeventyTwo"
                  />
                  <Text
                    className="mb-4 text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Alimentação fornecida
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-[21px] sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[71px] md:h-auto object-cover w-[71px]"
                    src="images/img_86.png"
                    alt="EightySix"
                  />
                  <Text
                    className="mb-[18px] text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Água filtrada
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[70px] md:h-auto mt-1 object-cover w-[70px]"
                    src="images/img_57.png"
                    alt="FiftySeven"
                  />
                  <Text
                    className="mb-[11px] text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Sanitário dentro da escola
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-[34px] sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[61px] md:h-auto object-cover w-[61px]"
                    src="images/img_62.png"
                    alt="SixtyTwo"
                  />
                  <Text
                    className="mb-[5px] text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Biblioteca
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col gap-[7px] items-center justify-start p-[35px] sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[51px] md:h-auto object-cover w-[51px]"
                    src="images/img_73.png"
                    alt="SeventyThree"
                  />
                  <Text
                    className="mb-1 text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Cozinha
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col gap-1.5 items-center justify-start p-[31px] sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[60px] md:h-auto object-cover w-[60px]"
                    src="images/img_87.png"
                    alt="EightySeven"
                  />
                  <Text
                    className="mb-1 text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Sala de Leitura
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col gap-2.5 items-center justify-start p-[21px] sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[62px] md:h-auto object-cover w-[34%] sm:w-full"
                    src="images/img_58.png"
                    alt="FiftyEight"
                  />
                  <Text
                    className="mb-[18px] text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Sala de Professores
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-[21px] sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[71px] md:h-auto object-cover w-[71px]"
                    src="images/img_86.png"
                    alt="EightyNine"
                  />
                  <Text
                    className="mb-[18px] text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Água tratada (rede pública)
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col gap-2.5 justify-center p-[11px] rounded-lg w-full">
                  <Img
                    className="h-[62px] md:h-auto md:ml-[0] ml-[69px] mr-[83px] mt-2.5 object-cover w-[62px]"
                    src="images/img_63.png"
                    alt="SixtyThree"
                  />
                  <Text
                    className="mb-7 mr-0.5 text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Energia Elétrica (rede pública)
                  </Text>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col gap-[17px] items-center justify-start p-[29px] sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[47px] md:h-auto object-cover w-[47px]"
                    src="images/img_74.png"
                    alt="SeventyFour"
                  />
                  <Text
                    className="mb-2.5 text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    Esgoto (rede pública)
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-blue-800 flex items-center justify-center mt-[137px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BuscarPageFourPage;

import React from "react";

import { Button, Img, Line, List, Radio, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const SobrensPageThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="left-[20%]">
          <div className="flex flex-col items-start mt-[126px] md:px-10 px-28 sm:px-5 w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
              size="txtInterSemiBold28"
            >
              Sobre nós
            </Text>
          </div>
          <Text
            className="leading-[29.00px] text-start m-10 mt-[3px] text-black-900 text-sm w-[83%] sm:w-full"
            size="txtInterRegular14"
          >
            Acreditar que dados são essenciais no processo de transformação da
            educação brasileira é o que tem movido o Água Limpa. Nós queremos
            estar presente no dia a dia das instituições e pessoas comprometidas
            com a melhoria da educação básica, e, por isso, buscamos sempre
            conhecer e suprir as necessidades das escolas e redes educação com
            relação ao uso de dados e indicadores educacionais. O Água Limpa
            está criando conexões mais fortes com cada um de seus públicos,
            oferecendo mais dados, mais informações, mais conhecimento,
            aprendendo e crescendo junto com ele, criando uma rede de pessoas
            interessadas, engajadas e empoderadas para transformar a educação do
            Brasil.{" "}
          </Text>
        </div>
        <div className="flex flex-col items-start mt-[60px] md:px-10 sm:px-5 px-[104px] w-full">
          <div className="flex flex-col items-center justify-start w-[73%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <List
                  className="flex flex-col gap-9 items-center w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_71.png"
                      alt="SeventyOne"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[27px] w-[72%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Antônio Thiago Neto
                      </Text>
                      <div className="flex flex-row gap-[9px] items-end justify-start mt-[15px] w-[58%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_121.png"
                          alt="OneHundredTwentyOne"
                        />
                        <Text
                          className="mt-[11px] text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://github.com/Antonio-coding
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-start mt-2 w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_131.png"
                          alt="OneHundredThirtyOne"
                        />
                        <Text
                          className="mb-0.5 sm:mt-0 mt-2.5 text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://www.linkedin.com/in/ant%C3%B4nio-thiago-b4694524b/
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />
                  <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_101.png"
                      alt="SeventyOne"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[27px] w-[72%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Caio Roberto
                      </Text>
                      <div className="flex flex-row gap-[9px] items-end justify-start mt-[15px] w-[58%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_121.png"
                          alt="OneHundredTwentyOne"
                        />
                        <Text
                          className="mt-[11px] text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://github.com/caio-coding
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-start mt-2 w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_131.png"
                          alt="OneHundredThirtyOne"
                        />
                        <Text
                          className="mb-0.5 sm:mt-0 mt-2.5 text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://www.linkedin.com/in/ant%C3%B4nio-caio-b4694524b/
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />
                  <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[166px] my-auto object-cover w-[166px]"
                      src="images/img_111.png"
                      alt="OneHundredOne"
                    />

                    <div className="flex flex-col items-start justify-start mb-[7px] ml-[undefinedpx] mr-[61px] mt-auto w-[66%] z-[1]">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Jefferson Marques
                      </Text>
                      <div className="flex flex-row gap-[9px] items-end justify-start mt-[18px] w-[58%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_121.png"
                          alt="OneHundredTwentyOne"
                        />
                        <Text
                          className="mt-[11px] text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://github.com/Jefferson-coding
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-start mt-2 w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_131.png"
                          alt="OneHundredThirtyOne"
                        />
                        <Text
                          className="mb-0.5 sm:mt-0 mt-2.5 text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://www.linkedin.com/in/ant%C3%B4nio-jefferson-b4694524b/
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />
                  <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_85.png"
                      alt="OneHundredEleven"
                    />
                    <div className="flex flex-col items-start justify-start w-[71%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Mirla Vieira
                      </Text>
                      <div className="flex flex-row gap-[9px] items-end justify-start mt-[15px] w-[58%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_121.png"
                          alt="OneHundredTwentyTwo"
                        />
                        <Text
                          className="mt-[11px] text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://github.com/Mirla-coding
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-start mt-2 w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_131.png"
                          alt="OneHundredThirtyTwo"
                        />
                        <Text
                          className="mb-0.5 sm:mt-0 mt-2.5 text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://www.linkedin.com/in/ant%C3%B4nio-Mirla-b4694524b/
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />
                  <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_91.png"
                      alt="SeventyOne"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[27px] w-[72%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Rodrigo Miranda
                      </Text>
                      <div className="flex flex-row gap-[9px] items-end justify-start mt-[15px] w-[58%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_121.png"
                          alt="OneHundredTwentyOne"
                        />
                        <Text
                          className="mt-[11px] text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://github.com/Rodrigo-coding
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-start mt-2 w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_131.png"
                          alt="OneHundredThirtyOne"
                        />
                        <Text
                          className="mb-0.5 sm:mt-0 mt-2.5 text-[15px] text-black-900"
                          size="txtInterRegular15"
                        >
                          https://www.linkedin.com/in/ant%C3%B4nio-Rodrigo-b4694524b/
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-blue-800 flex items-center justify-center mt-[201px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default SobrensPageThreePage;

import React from "react";

import { Button, Img, Line, List, Radio, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const depoimentosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SobrensPageThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-[43.85px] h-[75px] md:h-auto items-center justify-center md:px-5 px-[100.23px] py-[11.14px] shadow-bs w-full" />
        <div className="left-[83%]">
          <div className="flex flex-col items-start mt-[126px] md:px-10 px-28 sm:px-5 w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
              size="txtInterSemiBold28"
            >
              Sobre nós
            </Text>
          </div>
          <Text
            className="leading-[29.00px] text-start mt-[3px] text-black-900 text-sm w-[83%] sm:w-full"
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
                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start ml-1.5 mr-[61px] my-0 w-[92%] md:w-full">
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
                  <div className="flex my-0 relative w-full">
                    <Img
                      className="h-[166px] my-auto object-cover w-[166px]"
                      src="images/img_101.png"
                      alt="OneHundredOne"
                    />
                    <Line className="bg-blue_gray-100 h-px ml-[-166px] mr-auto w-full z-[1]" />
                    <div className="flex flex-col items-start justify-start mb-[7px] ml-[undefinedpx] mr-[61px] mt-auto w-[66%] z-[1]">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Caio Roberto
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
                </List>
                <List
                  className="flex flex-col gap-[39px] items-center pt-[11px] px-[11px] w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_111.png"
                      alt="OneHundredEleven"
                    />
                    <div className="flex flex-col items-start justify-start w-[71%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Jefferson Marques
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
                          https://github.com/Antonio-coding
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
                          https://www.linkedin.com/in/ant%C3%B4nio-thiago-b4694524b/
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />
                  <div className="flex md:flex-col flex-row gap-[41px] items-start justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_85.png"
                      alt="EightyFive"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[15px] w-[71%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Mirla Vieira
                      </Text>
                      <div className="flex flex-row gap-[9px] items-end justify-start mt-[18px] w-[58%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_121.png"
                          alt="OneHundredTwentyThree"
                        />
                        <div className="h-[19px] md:h-[30px] mt-[11px] relative w-[86%]">
                          <Text
                            className="m-auto text-[15px] text-black-900"
                            size="txtInterRegular15"
                          >
                            https://github.com/Antonio-coding
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-[15px] text-black-900 w-max"
                            size="txtInterRegular15"
                          >
                            https://github.com/Antonio-coding
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-between mt-2 w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_131.png"
                          alt="OneHundredThirtyThree"
                        />
                        <div className="h-[19px] sm:h-[21px] md:h-[31px] mb-0.5 sm:mt-0 mt-2.5 relative w-[92%] sm:w-full">
                          <Text
                            className="m-auto text-[15px] text-black-900"
                            size="txtInterRegular15"
                          >
                            https://www.linkedin.com/in/ant%C3%B4nio-thiago-b4694524b/
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-[15px] text-black-900 w-max"
                            size="txtInterRegular15"
                          >
                            https://www.linkedin.com/in/ant%C3%B4nio-thiago-b4694524b/
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />
                  <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_91.png"
                      alt="NinetyOne"
                    />
                    <div className="flex flex-col items-start justify-start w-[71%] md:w-full">
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
                          alt="OneHundredTwentyFour"
                        />
                        <div className="h-[19px] md:h-[30px] mt-[11px] relative w-[86%]">
                          <Text
                            className="m-auto text-[15px] text-black-900"
                            size="txtInterRegular15"
                          >
                            https://github.com/Antonio-coding
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-[15px] text-black-900 w-max"
                            size="txtInterRegular15"
                          >
                            https://github.com/Antonio-coding
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-between mt-2 w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_131.png"
                          alt="OneHundredThirtyFour"
                        />
                        <div className="h-[19px] sm:h-[21px] md:h-[31px] mb-0.5 sm:mt-0 mt-2.5 relative w-[92%] sm:w-full">
                          <Text
                            className="m-auto text-[15px] text-black-900"
                            size="txtInterRegular15"
                          >
                            https://www.linkedin.com/in/ant%C3%B4nio-thiago-b4694524b/
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-[15px] text-black-900 w-max"
                            size="txtInterRegular15"
                          >
                            https://www.linkedin.com/in/ant%C3%B4nio-thiago-b4694524b/
                          </Text>
                        </div>
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

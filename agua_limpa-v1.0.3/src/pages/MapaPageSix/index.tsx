import React from "react";

import { Button, Img, Input, Radio, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const depoimentosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MapaPageSixPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col items-end mt-[151px] md:pl-10 sm:pl-5 pl-[66px] w-full">
          <div className="h-[849px] relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat sm:h-[311px] h-[369px] md:h-[585px] left-[0] top-[17%] w-[91%] md:w-full"
              style={{ backgroundImage: "url('images/img_group5.svg')" }}
            >
              <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[92%]">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[289px]"
                    src="images/img_vector_blue_800.svg"
                    alt="vector"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-64 items-end justify-start p-0.5"
                    style={{ backgroundImage: "url('images/img_group29.svg')" }}
                  >
                    <Img
                      className="h-[152px] my-[50px]"
                      src="images/img_vector_blue_800_152x74.svg"
                      alt="vector_One"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[4%] h-[311px] right-[8%]"
                src="images/img_vector_blue_800_311x368.svg"
                alt="vector_Two"
              />
              <Img
                className="absolute bottom-[0] h-[237px] left-[0]"
                src="images/img_vector_blue_800_237x593.svg"
                alt="vector_Three"
              />
            </div>
            <div className="absolute bottom-[6%] flex flex-col items-center justify-start left-[8%] w-[26%]">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  LEGENDA
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[13%]">
                    <Input
                      name="rectangle189"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-black-900 border-solid flex h-[19px] w-full"
                    ></Input>
                    <div className="bg-green-300 border border-black-900 border-solid h-[19px] w-full"></div>
                    <div className="bg-orange-A200 border border-black-900 border-solid h-[19px] w-full"></div>
                    <div className="bg-teal-100 border border-black-900 border-solid h-[19px] w-full"></div>
                    <div className="bg-amber-A400 border border-black-900 border-solid h-[19px] w-full"></div>
                  </div>
                  <Text
                    className="leading-[16.00px] text-[15px] text-black-900"
                    size="txtInterRegular15"
                  >
                    <>
                      AGRESTE PERNAMBUCANO
                      <br />
                      MATA PERNAMBUCANA
                      <br />
                      METROPOLITANA DO RECIFE
                      <br />
                      SÃO FRANCISCO PERNAMBUCANO
                      <br />
                      SERTÃO PERNAMBUCANO
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-row gap-[13px] items-center justify-center left-[8%] top-[2%] w-[21%]">
              <Img
                className="h-[71px] md:h-auto object-cover w-[43%]"
                src="images/img_designsemnome_71x104.png"
                alt="designsemnome"
              />
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-base text-black-900"
                  size="txtInterMedium16"
                >
                  Pernambuco
                </Text>
                <Text
                  className="text-base text-gray-500"
                  size="txtInterRegular16"
                >
                  Brasil / Nordeste
                </Text>
              </div>
            </div>
            <Img
              className="absolute h-[849px] inset-y-[0] my-auto object-cover right-[0] w-[65%]"
              src="images/img_image1.png"
              alt="imageOne"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-[186px] w-full">
          <Footer className="bg-blue-800 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default MapaPageSixPage;

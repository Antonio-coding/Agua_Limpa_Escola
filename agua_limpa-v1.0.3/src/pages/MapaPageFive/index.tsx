import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Radio, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const depoimentosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MapaPageFivePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col gap-[43.85px] h-[75px] md:h-auto items-center justify-center md:px-5 px-[100.23px] py-[11.14px] shadow-bs w-full" />
          <div className="flex flex-row gap-[13px] items-center justify-start md:ml-[0] ml-[169px] mt-[164px] md:px-5 w-[19%] md:w-full">
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
          <div
            className="bg-cover bg-no-repeat h-[369px] sm:h-[375px] md:h-[649px] md:ml-[0] ml-[66px] mt-16 md:px-5 relative w-[86%] md:w-full"
            style={{ backgroundImage: "url('images/img_group5.svg')" }}
          >
            <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[92%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[289px]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-64 items-end justify-start p-0.5"
                  style={{ backgroundImage: "url('images/img_group6.svg')" }}
                >
                  <Img
                    className="h-[152px] my-[50px]"
                    src="images/img_vector_yellow_900.svg"
                    alt="vector_One"
                  />
                </div>
              </div>
            </div>
            <Img
              className="common-pointer absolute bottom-[4%] h-[311px] right-[8%]"
              src="images/img_vector_amber_a100.svg"
              alt="vector_Two"
              onClick={() => navigate("/mapapagesix")}
            />
            <Img
              className="absolute bottom-[0] h-[237px] left-[0]"
              src="images/img_vector_teal_100.svg"
              alt="vector_Three"
            />
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[165px] mt-[88px] md:px-5 w-[24%] md:w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text className="text-black-900 text-xl" size="txtInterRegular20">
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
          <Footer className="bg-blue-800 flex items-center justify-center mt-60 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default MapaPageFivePage;

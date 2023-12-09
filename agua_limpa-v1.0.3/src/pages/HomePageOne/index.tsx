import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  Radio,
  SelectBox,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomePageOneColumnoquevocdeseja from "components/HomePageOneColumnoquevocdeseja";
import Modal from "./../../components/Modal/index";
import AliceCarousel from "react-alice-carousel";

const HomePageOnePage: React.FC = () => {
  const navigate = useNavigate();

  const sliderRef = useRef<AliceCarousel>(null);

  const [sliderState, setsliderState] = React.useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-gray-100 flex flex-col items-center justify-start p-[23px] sm:px-5 w-full">
          {/* CABELHAÇO */}
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1108px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[26px] items-start justify-start md:mt-0 mt-[116px] w-1/2 md:w-full">
              <Text
                className="leading-[19.00px] sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                size="txtInterSemiBold28"
              >
                <Text>
                  Use dados.
                  <br />
                  <br />
                  Transforme a educação através da água.{" "}
                </Text>
              </Text>
              <Input
                name="rectangle189"
                placeholder="Buscar escola"
                className="p-0 w-full text-[15px] text-left"
                wrapClassName="common-pointer cursor-pointer flex items-center justify-center min-w-[462px] sm:min-w-full rounded-[7px] border border-black-900 border-solid flex h-[19px] w-full"
                leftIcon={
                  <Img
                    className="h-6 mr-[11px]"
                    src="images/img_rewind.svg"
                    alt="rewind"
                    onClick={() => navigate("/buscarpagefour")}
                  />
                }
                color="gray_200"
                size="p-[11px]"
                variant="fill"
              ></Input>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[462px] sm:min-w-full rounded-[7px]"
                onClick={() => navigate("/buscarpagefour")}
                leftIcon={
                  <Img
                    className="h-6 mr-[11px]"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                }
                color="gray_200"
                size="sm"
                variant="fill"
              >
                <div className="text-[15px] text-left">buscar escola</div>
              </Button>
              <button onClick={openModal}>Abrir Modal</button>
              <Modal isOpen={isModalOpen} onRequestClose={closeModal} />
            </div>
            <div className="h-[431px] relative w-[43%] md:w-full">
              <Img
                className="h-[431px] m-auto object-cover w-full"
                src="images/img_designsemnome.png"
                alt="designsemnome"
              />
              <div className="absolute bg-white-A700 border border-blue-800 border-solid flex flex-col h-max inset-y-[0] items-center justify-end my-auto p-3 right-[6%] rounded-[10px] shadow-bs1 w-[78%]">
                <div className="flex flex-col gap-3.5 items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row items-start justify-start w-[36%] md:w-full">
                    <Img
                      className="h-[19px] md:h-auto object-cover w-[19px]"
                      src="images/img_designsemnome_19x19.png"
                      alt="designsemnome_One"
                    />
                    <Text
                      className="ml-[5px] text-base text-blue-800"
                      size="txtInterSemiBold16"
                    >
                      Você sabia?
                    </Text>
                  </div>
                  <Text
                    className="leading-[16.00px] text-black-900 text-sm"
                    size="txtInterMedium14"
                  >
                    <Text>
                      Mais de 8.000 escolas no Brasil não têm acesso
                      <br />a água potável
                    </Text>
                  </Text>
                  <div className="md:h-[63px] h-[82px] relative w-full">
                    <div className="absolute bottom-[0] h-[23px] right-[0] w-[26%]">
                      <Text
                        className="absolute h-max inset-y-[0] left-[0] my-auto text-blue-800 text-xs"
                        size="txtInterSemiBold12"
                      >
                        Saiba mais
                      </Text>
                      <Img
                        className="absolute h-[23px] inset-y-[0] my-auto right-[0] w-[22px]"
                        src="images/img_arrowleft_blue_800.svg"
                        alt="arrowleft"
                      />
                    </div>
                    <Text
                      className="absolute leading-[16.00px] left-[0] text-[13px] text-blue_gray-900 top-[0] w-[96%] sm:w-full"
                      size="txtInterRegular13"
                    >
                      Levantamento feito com base no Censo Escolar mostra que
                      mais de 14 milhões de alunos sofrem com a falta de
                      estrutura escolar.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MAIN */}
        <div className="flex flex-col items-center justify-start max-w-[1146px] mt-[76px] mx-auto md:px-5 w-full">
          <div className="flex flex-col justify-start w-full">
            {/* MAIN-HEADER */}
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[11px] w-[87%] md:w-full">
              <HomePageOneColumnoquevocdeseja className="flex flex-col gap-[52px] h-[34px] md:h-auto items-start justify-start md:mt-0 mt-1 w-[407px] sm:w-full" />
              <Img
                className="h-[71px] sm:h-auto md:ml-[0] ml-[340px] object-cover w-[11%] md:w-full"
                src="images/img_designsemnome_71x104.png"
                alt="designsemnome_Two"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[13px] md:mt-0 mt-[18px]">
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
            <Line className="bg-blue_gray-100 h-px md:ml-[0] ml-[740px] mr-[60px] mt-3.5 w-[30%]" />

            {/* MAIN-CONTENT */}
            <div className="h-[622px] sm:h-[624px] md:h-[768px] mt-[18px] relative w-full">
              <div className="flex flex-col items-center justify-start m-auto w-full h-full">
                <div className="flex flex-row items-center justify-start sm:h-[606px] h-[610px] md:h-[750px] m-auto w-full">
                  {/* MAIN-CONTENT-LEFT */}
                  <div className="  md:gap-10 h-max inset-[0]   m-auto w-[97%]">
                    <div className="h-[606px] sm:h-[673px] relative w-[65%] md:w-full">
                      <div className="absolute h-[606px] sm:h-[673px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute h-[606px] sm:h-[673px] inset-y-[0] my-auto right-[0] w-[85%] md:w-full">
                          <div className="absolute h-[606px] sm:h-[673px] inset-[0] justify-center m-auto w-[99%] sm:w-full">
                            <div className="h-[606px] sm:h-[673px] m-auto w-full">
                              <div className="h-[606px] sm:h-[673px] m-auto w-full">
                                <div className="h-[606px] sm:h-[673px] m-auto w-full">
                                  <div className="flex sm:flex-col flex-row gap-5 h-full items-start justify-between m-auto w-full">
                                    <div className="flex sm:flex-1 flex-col md:gap-10 gap-[97px] justify-start w-[22%] sm:w-full">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[98px] items-center justify-start md:ml-[0] ml-[31px] w-3/4 md:w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group.svg')",
                                        }}
                                      >
                                        <Img
                                          className="h-[98px]"
                                          src="images/img_television.svg"
                                          alt="television"
                                        />
                                      </div>
                                      <Img
                                        className="h-[85px] mr-[15px]"
                                        src="images/img_group_white_a700_85x110.svg"
                                        alt="group"
                                      />
                                    </div>
                                    <div className="sm:h-[373px] md:h-[437px] h-[541px] sm:mt-0 mt-16 relative w-[76%] sm:w-full">
                                      <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[13%] my-auto w-[62%]">
                                        <div className="flex flex-col justify-start w-full">
                                          <div className="flex flex-row gap-[118px] items-start justify-end md:ml-[0] ml-[49px] w-[82%] md:w-full">
                                            <Img
                                              className="h-[122px]"
                                              src="images/img_group_white_a700_122x77.svg"
                                              alt="group_One"
                                            />
                                            <Img
                                              className="h-[30px] mt-16"
                                              src="images/img_television_white_a700.svg"
                                              alt="television_One"
                                            />
                                          </div>
                                          <Img
                                            className="h-[87px] ml-2.5 md:ml-[0] mt-[98px]"
                                            src="images/img_group_white_a700_87x141.svg"
                                            alt="group_Two"
                                          />
                                          <Img
                                            className="h-14 mt-2.5"
                                            src="images/img_television_white_a700_56x85.svg"
                                            alt="television_Two"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute bottom-[0] h-[114px] left-[0]"
                                        src="images/img_group_white_a700_114x124.svg"
                                        alt="group_Three"
                                      />
                                      <Img
                                        className="absolute h-[116px] right-[0] top-[0]"
                                        src="images/img_group_white_a700_116x145.svg"
                                        alt="group_Four"
                                      />
                                      <Img
                                        className="absolute bottom-[32%] h-10 right-[41%]"
                                        src="images/img_television_white_a700_40x61.svg"
                                        alt="television_Three"
                                      />
                                      <Img
                                        className="absolute h-[120px] inset-x-[0] mx-auto top-[10%]"
                                        src="images/img_group_white_a700_120x87.svg"
                                        alt="group_Five"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute h-[33px] right-[14%] top-[30%]"
                                    src="images/img_group_red_700.svg"
                                    alt="group_Six"
                                  />
                                  <Img
                                    className="absolute bottom-[20%] h-[67px] left-[33%]"
                                    src="images/img_group_white_a700_67x103.svg"
                                    alt="group_Seven"
                                  />
                                </div>
                                <div className="absolute flex flex-col md:gap-10 gap-[66px] justify-start right-[14%] top-[6%] w-[65%]">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Img
                                      className="h-[184px]"
                                      src="images/img_group_white_a700_184x202.svg"
                                      alt="group_Eight"
                                    />
                                    <Img
                                      className="h-[33px] mt-[127px]"
                                      src="images/img_close.svg"
                                      alt="close"
                                    />
                                  </div>
                                  <Img
                                    className="h-[134px] md:ml-[0] ml-[125px]"
                                    src="images/img_group_white_a700_134x175.svg"
                                    alt="group_Nine"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[27%] h-[107px] left-[23%]"
                                src="images/img_group_white_a700_107x113.svg"
                                alt="group_Ten"
                              />
                            </div>
                            <Img
                              className="absolute h-[161px] left-[14%] top-[31%]"
                              src="images/img_group_white_a700_161x179.svg"
                              alt="group_Eleven"
                            />
                          </div>
                          <Img
                            className="absolute h-[137px] right-[34%] top-[15%]"
                            src="images/img_group_white_a700_137x109.svg"
                            alt="group_Twelve"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[39%] flex flex-col h-[108px] items-end justify-start left-[36%] p-[21px] sm:px-5 w-1/5"
                            style={{
                              backgroundImage: "url('images/img_group13.svg')",
                            }}
                          >
                            <Img
                              className="h-2 mb-[31px] mt-6"
                              src="images/img_television_white_a700_8x15.svg"
                              alt="television_Four"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[34%] h-[53px] right-[0]"
                            src="images/img_group_white_a700_53x204.svg"
                            alt="group_Thirteen"
                          />
                        </div>
                        <div className="absolute flex flex-col gap-[11px] items-end justify-start right-[19%] top-[19%] w-[21%]">
                          <Img
                            className="h-[74px]"
                            src="images/img_television_white_a700_74x65.svg"
                            alt="television_Five"
                          />
                          <Img
                            className="h-[148px]"
                            src="images/img_group_white_a700_148x144.svg"
                            alt="group_Fourteen"
                          />
                        </div>
                        <Img
                          className=" ah-[178px] left-[0] top-[7%]"
                          src="images/img_group_white_a700_178x275.svg"
                          alt="group_Fifteen"
                        />
                        <Img
                          className="absolute h-[83px] inset-x-[0] mx-auto top-[2%]"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                        <Img
                          className="absolute h-6 right-[14%] top-[34%]"
                          src="images/img_group_white_a700.svg"
                          alt="group_Sixteen"
                        />
                        <Img
                          className="absolute h-[60px] left-[0] top-[30%]"
                          src="images/img_group_white_a700_60x116.svg"
                          alt="group_Seventeen"
                        />
                      </div>
                    </div>
                  </div>
                  {/* MAIN-CONTENT-RIGHT */}
                  <div className="  flex flex-col md:gap-10  h-max  items-end  m-auto w-[97%]">
                    <div className="flex flex-col items-start col-span-1 w-[40%]">
                      <div className=" h-[164px] right-[0] shadow-bs1 top-[0] w-[164px]  ">
                        <Img
                          className="h-[164px] m-auto object-cover w-[164px]"
                          src="images/img_designsemnome_164x164.png"
                          alt="designsemnome_Four"
                        />
                        <Text
                          className="absolute bottom-[32%] inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-max"
                          size="txtInterSemiBold40"
                        >
                          60%
                        </Text>
                      </div>
                      <div className="  flex flex-col  right-[0%]  gap-[16px] w-[220px] h-[104px]">
                        <Img
                          className="  leading-[16.00px] right-[0] object-cover  w-8"
                          src="images/img_designsemnome_34x34.png"
                          alt="designsemnome_Three"
                        />
                        <Text
                          className="  leading-[16.00px] right-[0] text-2xl md:text-[22px] text-blue-800 text-left sm:text-xl"
                          size="txtInterSemiBold24"
                        >
                          <Text>
                            Água tratada
                            <br />
                            <br />
                            (rede pública)
                          </Text>
                        </Text>
                      </div>
                      <Line className="bottom-[0%] bg-blue_gray-100 h-px md:ml-[0] ml-[740px] mr-[60px] mt-3.5 w-[30%]" />
                    </div>
                    <div className=" flex flex-col items-start">
                      <div className="gap-[16px] w-[220px] h-[104px] ">
                        <div className=" flex flex-row gap-3 items-start justify-start mt-[9px] w-[55%] md:w-full">
                          <div className="h-[164px] relative w-[164px]">
                            <Img
                              className="h-[164px] m-auto object-cover w-[164px]"
                              src="images/img_designsemnome_1.png"
                              alt="designsemnome_Five"
                            />
                            <Text
                              className=" absolute bottom-[32%] inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-max"
                              size="txtInterSemiBold40"
                            >
                              44%
                            </Text>
                          </div>
                        </div>
                        <div className=" bottom-[17%] flex flex-col items-start justify-start right-[2%] w-[34%]">
                          <div>
                            <Img
                              className="leading-[16.00px] right-[0] object-cover  w-8"
                              src="images/img_designsemnome_32x32.png"
                              alt="designsemnome_Six"
                            />
                          </div>
                          <div>
                            <Text
                              className=" leading-[16.00px] right-[0] text-2xl md:text-[22px] text-blue-800 sm:text-xl top-[37%]"
                              size="txtInterSemiBold24"
                            >
                              <>
                                Esgoto
                                <br />
                                <br />
                                (rede pública)
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px md:ml-[0] ml-[11px] mt-[25px] w-[90%]" />
                    </div>

                    <div className=" items-start">
                      <div className=" items-start">
                        <Text
                          className="md:ml-[0] ml-[186px] mt-[93px] text-2xl md:text-[22px] text-blue-800 sm:text-xl"
                          size="txtInterSemiBold24"
                        >
                          Água inexistente
                        </Text>
                        <Img
                          className=" bottom-1/4 h-8 object-cover right-[16%] w-8"
                          src="images/img_designsemnome_2.png"
                          alt="designsemnome_Eight"
                        />
                        <div className="h-[231px] md:h-[NaNpx] mb-[22px] ml-auto mr-[204px] mt-[-NaNpx] w-[231px] z-[1]">
                          <Img
                            className="h-[231px] m-auto object-cover w-[231px]"
                            src="images/img_designsemnome_231x231.png"
                            alt="designsemnome_Seven"
                          />
                          <Text
                            className=" absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-max"
                            size="txtInterSemiBold40"
                          >
                            4%
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text
                        className="ml-auto mr-[237px] mt-[-2.99px] text-blue-800 text-center text-xs z-[1]"
                        size="txtInterRegular12"
                      >
                        Fonte: Censo, INEP - 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARROSEUL */}
        <div className="flex flex-col mt-10 md:px-5 relative w-full">
          <div className="bg-gray-100 flex flex-col gap-[26px] justify-end mx-auto p-[38px] sm:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[73px] mr-[971px] sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
              size="txtInterSemiBold28"
            >
              Estatísticas
            </Text>
            <div className="md:h-[272px] h-[289px] mx-auto relative w-[95%] md:w-full">
              <div className="absolute h-[272px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[12%] w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <Img
                      className="cursor-pointer h-[41px] w-[41px]"
                      src="images/img_arrowleft_blue_800_41x41.svg"
                      alt="arrowleft_One"
                      onClick={() => sliderRef.current?.slidePrev?.() as any} // Utilize 'as any' para assertiva de tipo
                    />
                    <Img
                      className="cursor-pointer h-10 w-10"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                      onClick={() => sliderRef.current?.slideNext?.() as any} // Utilize 'as any' para assertiva de tipo
                    />
                  </div>
                  <Slider
                    activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 1 },
                      1050: { items: 1 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="absolute bg-gray-100 inset-[0] justify-center m-auto w-full"
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-h-lg mx-10">
                          <div className="flex flex-col">
                            <Img
                              className=" ah-[122px] md:h-auto object-cover w-[122px]"
                              src="images/img_17.png"
                              alt="Seventeen"
                            />
                            <Text
                              className="absolute bottom-[6%] left-[6%] text-blue-800 text-center text-xs"
                              size="txtInterRegular12Blue800"
                            >
                              <span className="text-blue-800 font-inter font-normal">
                                <>
                                  Quase 100 milhões de
                                  <br />
                                  brasileiros (44,2%) não
                                  <br />
                                  tem acesso a coleta de
                                  <br />
                                  esgosto.
                                  <br />
                                  <br />
                                </>
                              </span>
                              <span className="text-blue-800 font-inter font-normal italic">
                                <>
                                  (FONTE: SNIS 2021)
                                  <br />
                                </>
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col">
                            <Img
                              className=" ah-[122px] md:h-auto object-cover w-[94px]"
                              src="images/img_224.png"
                              alt="TwoHundredTwentyFour"
                            />
                            <Text
                              className="absolute  bottom-[6%] left-1/4 text-blue-800 text-center text-xs"
                              size="txtInterRegular12Blue800"
                            >
                              <span className="text-blue-800 font-inter font-normal">
                                <>
                                  84,2% dos <br />
                                  brasileiros têm
                                  <br />
                                  acesso a água <br />
                                  tratatada.
                                  <br />
                                  <br />
                                </>
                              </span>
                              <span className="text-blue-800 font-inter font-normal italic">
                                <>
                                  (FONTE: SNIS 2021)
                                  <br />
                                </>
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col">
                            <Img
                              className=" ah-[122px] md:h-auto object-cover w-[122px]"
                              src="images/img_31.png"
                              alt="ThirtyOne"
                            />
                            <Text
                              className="absolute  bottom-[6%] inset-x-[0] mx-auto text-blue-800 text-center text-xs"
                              size="txtInterRegular12Blue800"
                            >
                              <span className="text-blue-800 font-inter font-normal">
                                <>
                                  O Brasil teve mais de
                                  <br />
                                  130 miil internações em
                                  <br />
                                  2021 por doenças de
                                  <br />
                                  veiculação hídrica. <br />
                                  <br />
                                </>
                              </span>
                              <span className="text-blue-800 font-inter font-normal italic">
                                <>
                                  (FONTE: DATASUS 2021)
                                  <br />
                                </>
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col">
                            <Img
                              className=" ah-[130px] md:h-auto sm:mt-0 mt-[5px] object-cover w-[130px]"
                              src="images/img_45.png"
                              alt="FortyFive"
                            />
                            <Text
                              className=" bottom-[6%] right-[26%] text-blue-800 text-center text-xs"
                              size="txtInterRegular12Blue800"
                            >
                              <span className="text-blue-800 font-inter font-normal">
                                <>
                                  55,8% dos
                                  <br />
                                  brasileiros têm <br />
                                  acesso a coleta de
                                  <br />
                                  esgoto. <br />
                                  <br />
                                </>
                              </span>
                              <span className="text-blue-800 font-inter font-normal italic">
                                <>
                                  (FONTE: SNIS 2021)
                                  <br />
                                </>
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <Img
                              className="  ah-[122px] ah-[104px] md:h-auto sm:mt-0 mt-[13px] object-cover w-[104px]"
                              src="images/img_designsemnome_104x104.png"
                              alt="designsemnome"
                            />
                            <Text
                              className="absolute bottom-[0] right-[3%] text-blue-800 text-center text-xs"
                              size="txtInterRegular12Blue800"
                            >
                              <span className="text-blue-800 font-inter font-normal">
                                <>
                                  O Brasil investiu mais
                                  <br />
                                  de 17,3 bilhões em <br />
                                  saneamento básico
                                  <br />
                                  em 2021.
                                  <br />
                                  <br />
                                </>
                              </span>
                              <span className="text-blue-800 font-inter font-normal italic">
                                <>
                                  (FONTE: P. SANEAMENTO BRASIL
                                  <br />
                                  2021)
                                  <br />
                                </>
                              </span>
                            </Text>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-blue-800 flex items-center justify-center mt-[-6px] mx-auto w-full z-[1]" />
        </div>
      </div>
    </>
  );
};

export default HomePageOnePage;

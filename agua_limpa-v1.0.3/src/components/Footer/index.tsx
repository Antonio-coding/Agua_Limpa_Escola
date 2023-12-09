import React from "react";

import { Img, Radio, SelectBox, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const depoimentosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[38px] ml-[87px] mr-[134px] mt-8 w-[83%]">
          <div className="flex flex-col gap-[27px] items-center justify-center w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Img
                className="h-[52px] md:h-auto object-cover"
                src="images/img_gua31.png"
                alt="guaThirtyOne"
              />
              <div className="flex relative w-[24%] sm:w-full">
                <Img
                  className="h-[38px] my-auto object-cover w-[58%]"
                  src="images/img_gua31.png"
                  alt="guaThirtyTwo"
                />
                <Text
                  className="mb-[0px] ml-[-5px] mt-auto sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 z-[1]"
                  size="txtInterRegular23"
                >
                  & Você
                </Text>
              </div>
              <Text
                className="text-white-A700 text-xl"
                size="txtInterRegular20WhiteA700"
              >
                Contato:
              </Text>
            </div>
            <ul className="flex flex-col items-start justify-start w-[99%] md:w-full common-column-list">
              <li>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                  <Text
                    className="md:mt-0 mt-[5px] text-sm text-white-A700"
                    size="txtInterRegular14WhiteA700"
                  >
                    O que é o águalimpa?
                  </Text>
                  <Img
                    className="h-[29px] md:ml-[0] ml-[500px] w-[30px]"
                    src="images/img_socialicons.svg"
                    alt="socialicons"
                  />
                  <Img
                    className="h-[29px] md:ml-[0] ml-[26px] w-[60px]"
                    src="images/img_socialicons_white_a700.svg"
                    alt="socialicons_One"
                  />
                  <Img
                    className="h-[29px] md:ml-[0] ml-[26px] w-[29px]"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-[19px] md:ml-[0] ml-[436px] md:mt-0 mt-1.5 w-[19px]"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Text
                    className="md:ml-[0] ml-[10px] md:mt-0 mt-[7px] text-sm text-white-A700"
                    size="txtInterRegular14WhiteA700"
                  >
                    whatsapp
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex md:flex-col flex-row gap-2 items-start justify-between mt-[3px]">
                  <SelectBox
                    className="font-inter text-left text-sm text-white-A700 w-[96%] md:w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-3.5 mr-[0] w-[19px]"
                        src="images/img_subtract.svg"
                        alt="Subtract"
                      />
                    }
                    isMulti={false}
                    name="groupFortyTwo"
                    options={depoimentosOptionsList}
                    isSearchable={false}
                    placeholder="Depoimentos"
                  />
                  <Text
                    className="text-sm text-white-A700"
                    size="txtInterRegular14WhiteA700"
                  >
                    e-mail
                  </Text>
                </div>
              </li>
              <li>
                <Text
                  className="mt-[11px] text-sm text-white-A700"
                  size="txtInterRegular14WhiteA700"
                >
                  Imprensa
                </Text>
              </li>
              <li>
                <div className="flex flex-row sm:gap-10 items-start justify-between mt-2.5">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtInterRegular14WhiteA700"
                  >
                    Política de privacidade
                  </Text>
                  <Text
                    className="mt-1.5 text-white-A700 text-xl"
                    size="txtInterRegular20WhiteA700"
                  >
                    Apoio:
                  </Text>
                </div>
              </li>
              <li>
                <Img
                  className="h-[60px] md:ml-[0] ml-[1158px] mt-[10px]"
                  src="images/img_close_white_a700_62x63.svg"
                  alt="close"
                />
              </li>
              <li>
              <div className="font-inter mx-auto mt-50 text-[13px] text-center text-white-A700">
               Copyright 2023 agualimpa. Created by BugHunters
              </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

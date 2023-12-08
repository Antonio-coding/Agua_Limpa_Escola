import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import SobreNos from 'pages/SobreNos';

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-[22.27px] items-center justify-end w-full">
          <div className="flex flex-row gap-[22.27px] items-center justify-start w-full">
            <Img
              className="h-10 sm:h-auto object-cover w-[15%] md:w-full"
              src="images/img_gua21.png"
              alt="guaTwentyOne"
            />
          </div>
          <ul className="flex flex-row sm:hidden items-center justify-center w-1/5 common-row-list">
            <li>
              <Text
                className="common-pointer text-[11.14px] text-blue-800"
                size="txtInterMedium1114"
                onClick={() => navigate("/homepageone")}
              >
                Home{" "}
              </Text>
            </li>
            <li>
              <Text
                className="common-pointer ml-10 text-[11.14px] text-blue-800"
                size="txtInterMedium1114"
                onClick={() => navigate("/tcnicaspage02")}
              >
                Técnicas
              </Text>
            </li>
            <li>
              <Text
                className="common-pointer ml-[38px] text-[11.14px] text-blue-800"
                size="txtInterMedium1114"
                onClick={() => navigate("/sobrenspagethree")}
              >
                Sobre nós
              </Text>
            </li>
            <li>
              <Text className="common-pointer ml-10 text-[11.14px] text-blue-800"             
                size="txtInterMedium1114"
                onClick={() => navigate("/sobrenos")}
              >
                Sobre nós
                </Text>
            </li>
          </ul>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[114px]"
            rightIcon={
              <Img
                className="h-[11px] ml-[5px] my-1"
                src="images/img_arrowleft.svg"
                alt="arrow_left"
              />
            }
            shape="round"
            color="blue_300"
            size="xs"
            variant="fill"
            onClick={() => navigate("/mapapagefive")}
          >
            <div className="!text-white-A700 font-inter font-medium text-base text-center">
              Pesquisar
            </div>
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

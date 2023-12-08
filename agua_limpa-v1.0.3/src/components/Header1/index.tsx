import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";

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
        <div className="bg-white-A700 md:h-50 h-[75px] md:px-10 sm:px-5 px-[100.23px] py-[11.14px] relative shadow-bs w-full md:max-w-[1280px] mx-auto">
          <div className="flex flex-row gap-[22.27px] h-max items-center justify-end w-full">
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
                  className="ml-10 text-[11.14px] text-blue-800"
                  size="txtInterMedium1114"
                >
                  Técnicas
                </Text>
              </li>
              <li>
                <Text
                  className="ml-[38px] text-[11.14px] text-blue-800"
                  size="txtInterMedium1114"
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
            >
              <div className="!text-white-A700 font-inter font-medium text-base text-center">
                Pesquisar
              </div>
            </Button>
          </div>
          <Img
            className="absolute h-10 inset-y-0 left-90 my-auto object-cover w-[13%]"
            src="images/img_gua21.png"
            alt="guaTwentyOne"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;


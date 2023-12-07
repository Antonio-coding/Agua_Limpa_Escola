import React from "react";

import { Img, Text } from "components";

type HomePageOneColumnoquevocdesejaProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "oquevocdeseja"
> &
  Partial<{ oquevocdeseja: string }>;

const HomePageOneColumnoquevocdeseja: React.FC<
  HomePageOneColumnoquevocdesejaProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[18px] items-end justify-start w-auto sm:w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800 w-auto"
            size="txtInterSemiBold28"
          >
            {props?.oquevocdeseja}
          </Text>
          <Img
            className="h-[11px] w-[15px]"
            src="images/img_arrowdown.svg"
            alt="arrowdown"
          />
        </div>
      </div>
    </>
  );
};

HomePageOneColumnoquevocdeseja.defaultProps = {
  oquevocdeseja: "O que você deseja saber ?",
};

export default HomePageOneColumnoquevocdeseja;

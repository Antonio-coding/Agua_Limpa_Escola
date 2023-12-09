import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Radio, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const GraficoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row gap-[13px] items-center justify-start md:ml-[0] ml-[169px] mt-[164px] md:px-5 w-[19%] md:w-full">

           
            
          </div>
    
          <Footer className="bg-blue-800 flex items-center justify-center mt-60 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default GraficoPage;

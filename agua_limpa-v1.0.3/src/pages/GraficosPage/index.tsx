import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Chart } from "react-charts";

function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  // Return the JSX you want to render
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      {/* <Chart data={data} axes={axes} /> */}
    </div>
  );
}


const components = [["Line", MyChart]];
const GraficosPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          {/* Assuming Header and Footer components are correctly implemented */}
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          GraficosPage
          <div>
            {components.map(([label, Comp], index) => (
              <div key={index}>
                <h1>{label}</h1>
                <div>
                  <Comp />
                </div>
              </div>
            ))}
            <MyChart />
            <div style={{ height: "50rem" }} />
          </div>
          {/* Assuming Footer component is correctly implemented */}
          <Footer className="bg-blue-800 flex items-center justify-center mt-60 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default GraficosPage;

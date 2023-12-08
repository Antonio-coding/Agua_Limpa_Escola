import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const MapaPageSix = React.lazy(() => import("pages/MapaPageSix"));
const MapaPageFive = React.lazy(() => import("pages/MapaPageFive"));
const BuscarPageFour = React.lazy(() => import("pages/BuscarPageFour"));
const SobrensPageThree = React.lazy(() => import("pages/SobrensPageThree"));
const TcnicasPage02 = React.lazy(() => import("pages/TcnicasPage02"));
const HomePageOne = React.lazy(() => import("pages/HomePageOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePageOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepageone" element={<HomePageOne />} />
          <Route path="/tcnicaspage02" element={<TcnicasPage02 />} />
          <Route path="/sobrenspagethree" element={<SobrensPageThree />} />
          <Route path="/buscarpagefour" element={<BuscarPageFour />} />
          <Route path="/mapapagefive" element={<MapaPageFive />} />
          <Route path="/mapapagesix" element={<MapaPageSix />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

import "core-js/stable";
import React from "react";
import "regenerator-runtime/runtime";

import { HashRouter as Router, Route } from "react-router-dom";
import Loader from "./Common/Loader";
import { GlobalStyle } from "./Common/GlobalStyle";

const Main = React.lazy(() => import("./main/index"));

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Route />
        <Route />
      </Router>
      <GlobalStyle />
    </React.Suspense>
  );
};

export default App;

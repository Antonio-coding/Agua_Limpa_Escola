import "core-js/stable";
import React from "react";
import "regenerator-runtime/runtime";
import { HashRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from "./components/Common/GlobalStyle/index";
import Loader from "./components/Common/Loader/index";

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

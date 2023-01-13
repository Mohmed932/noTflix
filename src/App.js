import React, { lazy, Suspense, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const PageNotFound = lazy(() =>
  import("./components/PageNotFound/PageNotFound")
);
const Loading = lazy(() => import("./components/Loading/Loading"));
const Move = lazy(() => import("./components/Move/Move"));
const Home = lazy(() => import("./page/Home"));
const Searching = lazy(() => import("./page/Searching/Searching"));

const App = () => {
  const [all, setall] = useState([]);
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element=<Home setall={setall} /> />
          <Route path="move/:id" element=<Move /> />
          <Route path="search" element=<Searching all={all} /> />
          <Route path="*" element=<PageNotFound /> />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;

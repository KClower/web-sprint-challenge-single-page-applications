import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Help from "./Pages/Help";




const App = () => {
  return (
    <>
      <h1 className="card text-center mb-3">Lambda Eats</h1>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Help" element={<Help />} />
      </Routes>

    </>
  );
};
export default App;

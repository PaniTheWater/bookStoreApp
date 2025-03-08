import React from "react";

import Course from "./Components/Course";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <>
      {/* <Home /> */}
      {/* <Course /> */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

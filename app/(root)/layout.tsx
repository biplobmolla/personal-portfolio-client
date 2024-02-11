"use client";

import { Col, Row } from "antd";
import React, { useState } from "react";
import Header from "../_components/Header";
import Sidebar from "../_components/Sidebar";
import Footer from "../_components/Footer";
import Home from "./(Home)/page";
import Projects from "./projects/page";
import Designs from "./designs/page";
import Playground from "./playground/page";

const layout = () => {
  const [active, setActive] = useState<string>("");

  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#fff]">
      <Header setActive={setActive} active={active} />
      <main className="px-16 py-20">
        {active === "projects" ? (
          <Projects />
        ) : active === "designs" ? (
          <Designs />
        ) : active === "playground" ? (
          <Playground />
        ) : (
          <Home />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default layout;

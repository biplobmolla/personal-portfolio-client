"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Header = ({ setActive, active }: { active: string; setActive: any }) => {
  useEffect(() => {
    const tab = window.location.href.split("/");
    const activePage = tab[tab.length - 1];
    if (activePage === "") {
      setActive("home");
    } else {
      setActive(activePage);
    }
  }, []);

  return (
    <div className="w-full fixed p-4 bg-white-700 mx-auto z-50 bg-white text-sm">
      <div className="flex items-center justify-between w-1/2 mx-auto">
        <div
          className={`${
            active === "home" ? "bg-black text-white" : ""
          } px-5 py-2 rounded-lg cursor-pointer`}
          onClick={() => setActive("home")}
        >
          {/* <Link href="/">Home</Link> */}
          Home
        </div>
        <div
          className={`${
            active === "projects" ? "bg-black text-white" : ""
          } px-5 py-2 rounded-lg cursor-pointer`}
          onClick={() => setActive("projects")}
        >
          {/* <Link href="/projects">Projects</Link> */}
          Projects
        </div>
        <div
          className={`${
            active === "designs" ? "bg-black text-white" : ""
          } px-5 py-2 rounded-lg cursor-pointer`}
          onClick={() => setActive("designs")}
        >
          {/* <Link href="/designs">Designs</Link> */}
          Designs
        </div>
        <div
          className={`${
            active === "playground" ? "bg-black text-white" : ""
          } px-5 py-2 rounded-lg cursor-pointer`}
          onClick={() => setActive("playground")}
        >
          {/* <Link href="/playground">Playground</Link> */}
          Playground
        </div>
      </div>
    </div>
  );
};

export default Header;

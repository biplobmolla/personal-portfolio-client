"use client";

import { useGetUsersQuery } from "@/app/services/rtk/api/testApi";
import Hero from "./views/Hero";
import RecentProjects from "./views/RecentProjects";
import Skills from "./views/Skills";
import { useEffect } from "react";

export default function Home() {
  const { data, isLoading, isError } = useGetUsersQuery("users");
  useEffect(() => {
    console.log("Data: ", data);
  }, [data]);
  return (
    <div className="flex flex-col gap-10">
      <div className="mt-5 mb-3">
        <Hero />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <RecentProjects />
      </div>
    </div>
  );
}

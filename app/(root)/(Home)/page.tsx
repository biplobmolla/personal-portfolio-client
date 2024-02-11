import Hero from "./views/Hero";
import RecentProjects from "./views/RecentProjects";
import Skills from "./views/Skills";

export default function Home() {
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

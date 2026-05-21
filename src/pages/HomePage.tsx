import Hero from "../sections/Hero";
import QuickOverview from "../sections/QuickOverview";
import ProjectsPreview from "../sections/ProjectsPreview";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickOverview />
      <ProjectsPreview />
      <Contact />
    </>
  );
}
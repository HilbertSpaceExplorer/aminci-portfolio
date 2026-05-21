import Terminal from "../components/terminal/Terminal";
import { useLanguage } from "../i18n/LanguageContext";

const heroText = {
  en: {
    label: "Robotics · Vision · Machine Learning · Control",
    title: "Aminci Gana",
    description:
      "Mechanical engineering student focused on robotics, computer vision, machine learning, sensor integration, control systems, and experimental validation.",
    subtext:
      "Explore my work by typing commands into the terminal or scroll down to view project case studies directly.",
    projectsButton: "View projects",
    cvButton: "Download CV",
    tryCommands: "Try these commands:",
  },
  de: {
    label: "Robotik · Bildverarbeitung · Machine Learning · Regelungstechnik",
    title: "Aminci Gana",
    description:
      "Maschinenbaustudent mit Schwerpunkt auf Robotik, Computer Vision, Machine Learning, Sensorintegration, Regelungstechnik und experimenteller Validierung.",
    subtext:
      "Entdecke meine Projekte über das Terminal oder scrolle nach unten, um die Projektfallstudien direkt anzusehen.",
    projectsButton: "Projekte ansehen",
    cvButton: "Lebenslauf herunterladen",
    tryCommands: "Beispielbefehle:",
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const text = heroText[language];
  const cvLink =
  language === "de"
    ? "/cv/Aminci_Gana_CV_DE.pdf"
    : "/cv/Aminci_Gana_CV_EN.pdf";

  return (
    <section
      id="home"
      className="grid min-h-screen items-center gap-10 py-24 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">
          {text.label}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          {text.title}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          {text.description}
        </p>

        <p className="mt-5 max-w-xl text-slate-400">{text.subtext}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            {text.projectsButton}
          </a>

        <a
        href={cvLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
        >
        {text.cvButton}
        </a>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400">
          <p className="text-cyan-300">{text.tryCommands}</p>
          <p className="mt-2">
            <span className="text-slate-200">help</span>,{" "}
            <span className="text-slate-200">projects</span>,{" "}
            <span className="text-slate-200">open continuum-robot</span>,{" "}
            <span className="text-slate-200">skills</span>
          </p>
        </div>
      </div>

      <Terminal />
    </section>
  );
}
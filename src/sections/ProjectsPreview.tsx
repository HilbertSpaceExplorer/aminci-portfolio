import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";

const sectionText = {
  en: {
    label: "Selected Work",
    title: "Project case studies",
    description:
      "Click a project card to open a detailed case-study page. You can also open the same pages from the terminal using commands like",
    terminal: "Terminal:",
    view: "View case study →",
  },
  de: {
    label: "Ausgewählte Projekte",
    title: "Projektfallstudien",
    description:
      "Klicke auf eine Projektkarte, um eine ausführliche Projektseite zu öffnen. Du kannst dieselben Seiten auch über das Terminal öffnen, zum Beispiel mit",
    terminal: "Terminal:",
    view: "Fallstudie ansehen →",
  },
};

export default function ProjectsPreview() {
  const { language } = useLanguage();
  const text = sectionText[language];

  return (
    <section id="projects" className="py-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          {text.label}
        </p>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          {text.title}
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          {text.description}{" "}
          <span className="text-cyan-300">open continuum-robot</span>.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const projectText = project.translations[language];

          return (
            <Link
              to={`/projects/${project.slug}`}
              key={project.slug}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.03]"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-cyan-300">{projectText.category}</p>
                <p className="text-sm text-slate-500">{project.year}</p>
              </div>

              <h3 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-200">
                {projectText.title}
              </h3>

              <p className="mt-3 text-slate-300">{projectText.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-sm text-slate-400">
                  {text.terminal}{" "}
                  <span className="text-cyan-300">open {project.slug}</span>
                </p>

                <p className="text-sm text-cyan-300 transition group-hover:translate-x-1">
                  {text.view}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
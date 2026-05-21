import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";

const pageText = {
  en: {
    back: "← Back home",
    notFound: "Project not found",
    notFoundText: "The project you are looking for does not exist.",
    problem: "Problem",
    contribution: "My contribution",
    approach: "Technical approach",
    result: "Result",
    demonstrates: "What this demonstrates",
    media: "Project media",
    mediaText:
      "Add diagrams, plots, screenshots, CAD images, videos, or experiment photos here later.",
  },
  de: {
    back: "← Zurück zur Startseite",
    notFound: "Projekt nicht gefunden",
    notFoundText: "Das gesuchte Projekt existiert nicht.",
    problem: "Problem",
    contribution: "Mein Beitrag",
    approach: "Technischer Ansatz",
    result: "Ergebnis",
    demonstrates: "Was dieses Projekt zeigt",
    media: "Projektmedien",
    mediaText:
      "Hier kannst du später Diagramme, Plots, Screenshots, CAD-Bilder, Videos oder Fotos aus dem Experiment ergänzen.",
  },
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const text = pageText[language];

  const project = getProjectBySlug(slug ?? "");

  if (!project) {
    return (
      <section className="min-h-screen py-24">
        <Link to="/" className="text-cyan-300 hover:text-cyan-200">
          {text.back}
        </Link>

        <h1 className="mt-10 text-4xl font-bold">{text.notFound}</h1>
        <p className="mt-4 text-slate-300">{text.notFoundText}</p>
      </section>
    );
  }

  const projectText = project.translations[language];

  return (
    <section className="min-h-screen py-24">
      <Link to="/" className="text-cyan-300 hover:text-cyan-200">
        {text.back}
      </Link>

     <div className="mt-10 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
  <div>
    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
      {projectText.category}
    </p>

    <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
      {projectText.title}
    </h1>

    <p className="mt-4 text-slate-400">{project.year}</p>

    <p className="mt-6 text-lg leading-8 text-slate-300">
      {projectText.summary}
    </p>

    <div className="mt-8 flex flex-wrap gap-2">
      {project.tools.map((tool) => (
        <span
          key={tool}
          className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200"
        >
          {tool}
        </span>
      ))}
    </div>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
    {project.coverImage ? (
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-900">
        <img
          src={project.coverImage}
          alt={projectText.title}
          className={`h-full w-full ${
            project.coverFit === "contain"
              ? "object-contain p-4"
              : "object-cover"
          }`}
        />
      </div>
    ) : (
      <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-white/20 text-slate-500">
        No cover image available
      </div>
    )}
  </div>
</div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <ProjectSection title={text.problem} text={projectText.problem} />
        <ProjectSection
          title={text.contribution}
          text={projectText.contribution}
        />
        <ProjectSection title={text.approach} text={projectText.approach} />
        <ProjectSection title={text.result} text={projectText.result} />
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-2xl font-bold">{text.demonstrates}</h2>

        <div className="mt-5 flex flex-wrap gap-2">
          {projectText.demonstrates.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

     <ProjectMediaSection
        title={text.media}
        gallery={project.gallery}
    />
    </section>
  );
}

function ProjectSection({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>
    </article>
  );
}

function ProjectMediaSection({
  title,
  gallery,
}: {
  title: string;
  gallery?: {
    src: string;
    alt: string;
    caption?: string;
    type?: "image" | "diagram" | "plot";
  }[];
}) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold">{title}</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {gallery.map((item) => (
          <figure
            key={item.src}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-72 w-full object-cover"
            />

            <figcaption className="border-t border-white/10 p-4">
              {item.type && (
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
                  {item.type}
                </p>
              )}

              <p className="text-sm leading-6 text-slate-300">
                {item.caption ?? item.alt}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
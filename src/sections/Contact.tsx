import { useLanguage } from "../i18n/LanguageContext";

const contactText = {
  en: {
    label: "Contact",
    title: "Let’s build robotic systems.",
    paragraph:
      "I am interested in internships, working student roles, and research-related opportunities in robotics, mechatronics, computer vision, machine learning, sensor integration, and control.",
    email: "Email me",
    cv: "Download CV",
    emailLabel: "Email",
  },
  de: {
    label: "Kontakt",
    title: "Lass uns robotische Systeme entwickeln.",
    paragraph:
      "Ich interessiere mich für Praktika, Werkstudentenstellen und forschungsnahe Tätigkeiten in den Bereichen Robotik, Mechatronik, Computer Vision, Machine Learning, Sensorintegration und Regelungstechnik.",
    email: "E-Mail senden",
    cv: "Lebenslauf herunterladen",
    emailLabel: "E-Mail",
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const text = contactText[language];

  const cvLink =
    language === "de"
      ? "/cv/Aminci_Gana_CV_DE.pdf"
      : "/cv/Aminci_Gana_CV_EN.pdf";

  return (
    <section id="contact" className="py-24">
      <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.04] p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          {text.label}
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">{text.title}</h2>

        <p className="mt-5 max-w-2xl text-slate-300">{text.paragraph}</p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            {text.emailLabel}
          </p>

          <a
            href="mailto:amincigana@gmail.com"
            className="mt-2 inline-block break-all text-lg font-semibold text-white hover:text-cyan-300"
          >
            amincigana@gmail.com
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:amincigana@gmail.com?subject=Portfolio%20Contact"
            className="rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            {text.email}
          </a>

          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            {text.cv}
          </a>

          <a
            href="https://github.com/HilbertSpaceExplorer"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aminci-jonathan-gana-257903389/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
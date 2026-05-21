import { useLanguage } from "../i18n/LanguageContext";

const overviewText = {
  en: {
    label: "About",
    title: "Engineering physical systems with code.",
    paragraph:
      "I work at the intersection of mechanical engineering, robotics, computer vision, machine learning, measurement systems, and control. My current focus is modeling continuum robots under external contact forces while also applying data-driven methods to sensor-based engineering systems.",
    skills: [
      "Continuum robotics",
      "Sensor integration",
      "Machine learning",
      "Classification",
      "Regression",
      "Stereo vision",
      "OpenCV",
      "RealSense cameras",
      "MATLAB/Simulink",
      "Load cell calibration",
      "Experimental validation",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Responsive web design",
    ],
  },
  de: {
    label: "Über mich",
    title: "Physische Systeme mit Code verstehen und verbessern.",
    paragraph:
      "Ich arbeite an der Schnittstelle von Maschinenbau, Robotik, Computer Vision, Machine Learning, Messtechnik und Regelungstechnik. Mein aktueller Schwerpunkt liegt auf der Modellierung von Kontinuumrobotern unter externen Kontaktkräften sowie auf datengetriebenen Methoden für sensorbasierte technische Systeme.",
    skills: [
      "Kontinuumrobotik",
      "Sensorintegration",
      "Machine Learning",
      "Klassifikation",
      "Regression",
      "Stereo-Vision",
      "OpenCV",
      "RealSense-Kameras",
      "MATLAB/Simulink",
      "Kraftsensor-Kalibrierung",
      "Experimentelle Validierung",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Responsive Webdesign",
    ],
  },
};

export default function QuickOverview() {
  const { language } = useLanguage();
  const text = overviewText[language];

  return (
    <section id="about" className="border-y border-white/10 py-24">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            {text.label}
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            {text.title}
          </h2>
        </div>

        <div className="space-y-6 text-slate-300">
          <p>{text.paragraph}</p>

          <div className="flex flex-wrap gap-2">
            {text.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
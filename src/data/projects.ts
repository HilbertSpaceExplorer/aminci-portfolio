import type { Language } from "../i18n/LanguageContext";

export type ProjectMediaItem = {
  src: string;
  alt: string;
  caption?: string;
  type?: "image" | "diagram" | "plot";
};

export type ProjectVideo = {
  title: string;
  src: string;
  caption?: string;
};

export type ProjectTranslation = {
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  problem: string;
  contribution: string;
  approach: string;
  result: string;
  demonstrates: string[];
};

export type Project = {
  slug: string;
  year: string;
  tools: string[];
  coverImage?: string;
  coverFit?: "cover" | "contain";
  gallery?: ProjectMediaItem[];
  videos?: ProjectVideo[];
  githubUrl?: string;
  reportUrl?: string;
  liveDemoUrl?: string;
  translations: Record<Language, ProjectTranslation>;
};
export const projects: Project[] = [
  {
    slug: "continuum-robot",
    year: "2026",
    tools: ["MATLAB", "Simulink", "Python", "ROS", "RealSense", "OpenCV"],
    coverImage: "/images/projects/continuum-robot/cover.png",
    translations: {
      en: {
        title: "Continuum Robot Modeling Under External Forces",
        shortTitle: "Continuum Robot Modeling",
        category: "Robotics / Optimization / Computer Vision",
        summary:
          "Experimental workflow for predicting continuum robot shape under external contact forces using tendon load cells, base force sensing, and stereo vision.",
        problem:
          "Continuum robots deform under external contact forces, making their shape difficult to predict from actuation data alone.",
        contribution:
          "I developed an experimental workflow for modeling and validating the shape of a continuum robot under known external forces. The setup combines tendon load cells, base force sensing, and stereo vision to capture how the robot behaves under contact.",
        approach:
          "The project connects physical sensing, computer vision, and model identification. Tendon forces and external force information are combined with stereo vision-based shape measurements to support force-aware robot modeling.",
        result:
          "The workflow supports experiments with contact-free motion, static external contact, quasi-static loading, and dynamic contact excitation.",
        demonstrates: [
          "Robotics modeling",
          "Experimental design",
          "Optimization",
          "Sensor integration",
          "Computer vision",
          "Validation of physical systems",
        ],
      },
      de: {
        title: "Modellierung eines Kontinuumroboters unter externen Kräften",
        shortTitle: "Kontinuumroboter-Modellierung",
        category: "Robotik / Optimierung / Computer Vision",
        summary:
          "Experimenteller Workflow zur Vorhersage der Form eines Kontinuumroboters unter externen Kontaktkräften mithilfe von Seilkraftsensoren, Basiskraftmessung und Stereo-Vision.",
        problem:
          "Kontinuumroboter verformen sich unter externen Kontaktkräften, wodurch ihre Form allein aus den Antriebsdaten nur schwer vorherzusagen ist.",
        contribution:
          "Ich entwickelte einen experimentellen Workflow zur Modellierung und Validierung der Form eines Kontinuumroboters unter bekannten externen Kräften. Der Aufbau kombiniert Seilkraftsensoren, Kraftmessung an der Basis und Stereo-Vision.",
        approach:
          "Das Projekt verbindet physikalische Sensorik, Computer Vision und Modellidentifikation. Seilkräfte und externe Kraftinformationen werden mit kamerabasierten Formmessungen kombiniert, um eine kraftbewusste Modellierung zu ermöglichen.",
        result:
          "Der Workflow unterstützt Versuche mit kontaktfreier Bewegung, statischem Kontakt, quasi-statischer Belastung und dynamischer Kontaktanregung.",
        demonstrates: [
          "Robotikmodellierung",
          "Experimentelles Design",
          "Optimierung",
          "Sensorintegration",
          "Computer Vision",
          "Validierung physikalischer Systeme",
        ],
      },
    },
  },

  {
    slug: "laptime-stopwatch",
    year: "2025",
    tools: ["Python", "OpenCV", "Computer Vision", "Video Processing"],
    coverImage: "/images/projects/laptime-stopwatch/cover.jpg",
    translations: {
      en: {
        title: "Computer Vision Laptime Measurement for Line-Following Robots",
        shortTitle: "Vision-Based Laptime Measurement",
        category: "Robotics / Computer Vision",
        summary:
          "Computer vision-based stopwatch system for measuring the lap times of line-following robots from video input, enabling more objective comparison of robot performance during testing.",
        problem:
          "When testing line-following robots, lap times are often measured manually with a stopwatch. This introduces human reaction-time errors and makes it harder to compare robot performance objectively.",
        contribution:
          "I built a computer vision-based laptime measurement system that detects when a line-following robot crosses a defined start/finish region and automatically records lap times.",
        approach:
          "The system processes video input using OpenCV, detects the robot or relevant motion near the timing line, and uses this information to start, stop, or update the laptime measurement.",
        result:
          "The project enables more consistent and objective timing of robot laps during testing and can support comparison between different robot configurations, control settings, or mechanical designs.",
        demonstrates: [
          "Practical computer vision",
          "Robotics testing",
          "Experimental measurement",
          "Automation",
          "Performance evaluation",
        ],
      },
      de: {
        title: "Rundenzeitmessung für Linienfolger-Roboter mit Computer Vision",
        shortTitle: "Vision-basierte Rundenzeitmessung",
        category: "Robotik / Computer Vision",
        summary:
          "Computer-Vision-basiertes Stoppuhrsystem zur Messung der Rundenzeiten von Linienfolger-Robotern aus Videodaten, um Robotertests objektiver vergleichen zu können.",
        problem:
          "Bei Tests von Linienfolger-Robotern werden Rundenzeiten häufig manuell mit einer Stoppuhr gemessen. Dadurch entstehen Reaktionszeitfehler, und ein objektiver Vergleich der Roboterleistung wird schwieriger.",
        contribution:
          "Ich entwickelte ein Computer-Vision-basiertes Messsystem, das erkennt, wann ein Linienfolger-Roboter eine definierte Start-Ziel-Zone überquert, und die Rundenzeit automatisch erfasst.",
        approach:
          "Das System verarbeitet Videodaten mit OpenCV, erkennt den Roboter beziehungsweise relevante Bewegungen im Bereich der Messlinie und nutzt diese Informationen zur automatischen Zeitmessung.",
        result:
          "Das Projekt ermöglicht eine konsistentere und objektivere Messung von Rundenzeiten und unterstützt den Vergleich unterschiedlicher Roboterkonfigurationen, Regelparameter oder mechanischer Designs.",
        demonstrates: [
          "Praktische Computer Vision",
          "Robotertests",
          "Experimentelle Messung",
          "Automatisierung",
          "Leistungsbewertung",
        ],
      },
    },
  },

  {
    slug: "pid-evaluation",
    year: "2025",
    tools: ["Python", "OpenCV", "PID Control", "Computer Vision", "Data Analysis"],
    coverImage: "/images/projects/pid-evaluation/cover.jpg",
    translations: {
      en: {
        title: "Vision-Based Robustness Evaluation of PID Distance Control",
        shortTitle: "PID Robustness Evaluation",
        category: "Robotics / Computer Vision / Control Systems",
        summary:
          "Quantitative evaluation workflow for testing the robustness of a PID distance control algorithm using computer vision measurements to analyze tracking behavior, distance error, and control performance.",
        problem:
          "A PID distance control algorithm may work well under ideal conditions but still behave poorly when the environment, initial conditions, or disturbances change.",
        contribution:
          "I developed a computer vision-based evaluation workflow to measure how robustly a robot maintains a target distance using a PID control algorithm.",
        approach:
          "The system uses OpenCV to estimate distance-related measurements from video data. These measurements can then be used to analyze control performance, including distance error, overshoot, oscillation, settling behavior, and sensitivity to disturbances.",
        result:
          "The workflow provides a more objective way to evaluate whether the PID distance controller remains stable and accurate under different test conditions.",
        demonstrates: [
          "Control systems",
          "Computer vision-based measurement",
          "Quantitative evaluation",
          "Robotics experimentation",
          "Robustness analysis",
        ],
      },
      de: {
        title: "Vision-basierte Robustheitsbewertung einer PID-Distanzregelung",
        shortTitle: "PID-Robustheitsbewertung",
        category: "Robotik / Computer Vision / Regelungstechnik",
        summary:
          "Quantitativer Evaluationsworkflow zur Bewertung der Robustheit eines PID-Distanzreglers mithilfe von Computer-Vision-Messungen zur Analyse von Abstandsfehlern und Regelverhalten.",
        problem:
          "Ein PID-Distanzregler kann unter idealen Bedingungen gut funktionieren, aber bei veränderten Umgebungen, Anfangsbedingungen oder Störungen deutlich schlechter reagieren.",
        contribution:
          "Ich entwickelte einen Computer-Vision-basierten Evaluationsworkflow, um zu messen, wie robust ein Roboter einen Zielabstand mit einem PID-Regelalgorithmus einhält.",
        approach:
          "Das System nutzt OpenCV, um abstandsbezogene Messgrößen aus Videodaten zu bestimmen. Diese Messungen können anschließend zur Analyse von Abstandsfehlern, Überschwingen, Schwingungsverhalten, Einschwingverhalten und Störempfindlichkeit verwendet werden.",
        result:
          "Der Workflow bietet eine objektivere Grundlage zur Bewertung, ob der PID-Distanzregler unter unterschiedlichen Testbedingungen stabil und genau bleibt.",
        demonstrates: [
          "Regelungstechnik",
          "Vision-basierte Messung",
          "Quantitative Bewertung",
          "Robotikexperimente",
          "Robustheitsanalyse",
        ],
      },
    },
  },

  {
    slug: "compressed-air-ml",
    year: "2025",
    tools: [
      "Python",
      "Machine Learning",
      "Sensor Data",
      "Classification",
      "Regression",
      "Data Analysis",
    ],
    coverImage: "/images/projects/compressed-air-ml/cover.jpg",
    translations: {
      en: {
        title:
          "ML-Based State Classification and Flow Estimation in a Compressed-Air System",
        shortTitle: "Compressed-Air ML Monitoring",
        category: "Machine Learning / Industrial Systems / Sensor Data",
        summary:
          "Machine learning workflow for analyzing sensor data from a compressed-air system, including classification of operating states and regression-based estimation of airflow behavior.",
        problem:
          "Compressed-air systems can operate in different states, such as normal operation, leakage, idle behavior, or active air consumption. These states are not always easy to distinguish manually from raw sensor signals alone.",
        contribution:
          "I worked with sensor data from a compressed-air system and developed a machine learning workflow for analyzing operating states and flow behavior.",
        approach:
          "The project uses measured system data such as pressure, volume flow, and system-related sensor values. The dataset structure supports both classification and regression tasks: classification for identifying system states such as healthy, leak, idle, or serving, and regression for estimating airflow behavior under different operating modes.",
        result:
          "The project demonstrates how machine learning can be used to extract useful information from industrial sensor data and support condition monitoring or performance analysis of pneumatic systems.",
        demonstrates: [
          "Machine learning",
          "Industrial data analysis",
          "Sensor-based monitoring",
          "Classification",
          "Regression",
          "Engineering data interpretation",
        ],
      },
      de: {
        title:
          "ML-basierte Zustandserkennung und Volumenstromschätzung in einem Druckluftsystem",
        shortTitle: "Druckluftsystem-Monitoring mit ML",
        category: "Machine Learning / Industrielle Systeme / Sensordaten",
        summary:
          "Machine-Learning-Workflow zur Analyse von Sensordaten eines Druckluftsystems, einschließlich Klassifikation von Betriebszuständen und regressionsbasierter Schätzung des Volumenstromverhaltens.",
        problem:
          "Druckluftsysteme können sich in verschiedenen Zuständen befinden, zum Beispiel Normalbetrieb, Leckage, Leerlauf oder aktive Luftentnahme. Diese Zustände sind aus Rohsensordaten nicht immer einfach manuell zu unterscheiden.",
        contribution:
          "Ich arbeitete mit Sensordaten eines Druckluftsystems und entwickelte einen Machine-Learning-Workflow zur Analyse von Betriebszuständen und Volumenstromverhalten.",
        approach:
          "Das Projekt nutzt gemessene Systemdaten wie Druck, Volumenstrom und weitere Sensorsignale. Die Datensatzstruktur unterstützt sowohl Klassifikations- als auch Regressionsaufgaben: Klassifikation zur Erkennung von Zuständen wie Healthy, Leak, Idle oder Serving sowie Regression zur Schätzung des Volumenstromverhaltens unter verschiedenen Betriebsmodi.",
        result:
          "Das Projekt zeigt, wie Machine Learning genutzt werden kann, um aus industriellen Sensordaten relevante Informationen zu gewinnen und Zustandsüberwachung oder Leistungsanalyse pneumatischer Systeme zu unterstützen.",
        demonstrates: [
          "Machine Learning",
          "Industrielle Datenanalyse",
          "Sensorbasiertes Monitoring",
          "Klassifikation",
          "Regression",
          "Interpretation technischer Daten",
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
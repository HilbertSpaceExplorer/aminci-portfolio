import { projects } from "../../data/projects";

export type CommandResult = {
  type: "text" | "clear" | "link" | "route";
  content: string;
};

export function runCommand(input: string): CommandResult {
  const trimmed = input.trim();
  const command = trimmed.toLowerCase();

  if (!command) {
    return {
      type: "text",
      content: "",
    };
  }

  if (command === "clear") {
    return {
      type: "clear",
      content: "",
    };
  }

 if (command === "help") {
  return {
    type: "text",
    content: `
Available commands:

help                    Show commands
about                   About me
thesis                  Current thesis focus
projects                List projects

open continuum-robot    Open project
open laptime-stopwatch  Open project
open pid-evaluation     Open project
open compressed-air-ml  Open project

skills                  Technical skills
contact                 Contact information
cv                      Open English CV
cv de                   Open German CV
clear                   Clear terminal
`,
  };
}

  if (command === "about" || command === "whoami") {
    return {
      type: "text",
      content: `
Aminci Gana

Mechanical Engineering student focused on robotics, computer vision,
machine learning, sensor integration, control systems, and continuum robot modeling.

I build experimental systems that connect physical sensors, vision pipelines,
machine learning workflows, control algorithms, and real robotic hardware.
`,
    };
  }

  if (command === "thesis") {
    return {
      type: "text",
      content: `
Current thesis focus:

Continuum robot modeling under external contact forces.

The goal is to expand and validate a model that predicts robot shape using
actuation data, tendon load cells, base force sensing, and stereo vision-based
shape reconstruction.
`,
    };
  }

 if (command === "projects" || command === "ls projects") {
  const list = projects
    .map(
      (project) =>
        `${project.slug.padEnd(24)} ${project.translations.en.title} (${project.year})`
    )
    .join("\n");

  return {
    type: "text",
    content: `
Selected projects:

${list}

Use:
open continuum-robot
open laptime-stopwatch
open pid-evaluation
open compressed-air-ml
`,
  };
}

  if (command.startsWith("open ")) {
    const slug = command.replace("open ", "").trim();
    const projectExists = projects.some((project) => project.slug === slug);

    if (projectExists) {
      return {
        type: "route",
        content: `/projects/${slug}`,
      };
    }

    return {
      type: "text",
      content: `Project not found: ${slug}\nType "projects" to see available projects.`,
    };
  }

if (command === "skills") {
  return {
    type: "text",
    content: `
Robotics & Control:
- Continuum robots
- PID control
- Distance control
- Sensor integration
- Experimental validation
- MATLAB/Simulink workflows

Computer Vision:
- Python
- OpenCV
- Intel RealSense
- Stereo vision
- Object/marker detection
- Video processing
- Vision-based measurement

Machine Learning & Data:
- Classification
- Regression
- Sensor data analysis
- Data preprocessing
- Industrial condition monitoring
- Model evaluation

Web Development:
- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Responsive web design
- Deployment with Vercel

Programming:
- Python
- MATLAB
- TypeScript / React basics
- Git / GitHub
- ROS basics

Hardware & Measurement:
- Load cells
- Force/wrench sensors
- Pressure sensors
- Volume flow sensors
- Camera-based measurement
- Robot testing setups
- CAD / prototyping
`,
  };
}

  if (command === "contact") {
    return {
      type: "text",
      content: `
Contact:

Email:    amincigana@gmail.com
GitHub:   https://github.com/HilbertSpaceExplorer
LinkedIn: https://www.linkedin.com/in/aminci-jonathan-gana-257903389/

I am interested in internships, working student roles, and research-related
opportunities in robotics, mechatronics, computer vision, machine learning,
sensor integration, and control.
`,
    };
  }

    if (command === "cv" || command === "cv en" || command === "resume") {
    return {
        type: "link",
        content: "/cv/Aminci_Gana_CV_EN.pdf",
    };
    }

    if (command === "cv de" || command === "lebenslauf") {
    return {
        type: "link",
        content: "/cv/Aminci_Gana_CV_DE.pdf",
    };
    }
  return {
    type: "text",
    content: `Command not found: ${input}\nType "help" to see available commands.`,
  };
}
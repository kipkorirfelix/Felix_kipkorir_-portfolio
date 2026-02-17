/**
 * Skills information (English)
 */

import dockerImg from "../public/img/skills/docker.svg";
import gitImg from "../public/img/skills/git.svg";
import odataImg from "../public/img/skills/odata.svg";
import sapImg from "../public/img/skills/sap.svg";
import csharpImg from "../public/img/skills/csharp.svg";
import cppImg from "../public/img/skills/cpp.svg";
import javaImg from "../public/img/skills/java.svg";
import cImg from "../public/img/skills/c.svg";
import reactImg from "../public/img/skills/react.svg";
import nodeImg from "../public/img/skills/node.svg";
import typescriptImg from "../public/img/skills/typescript.svg";
import pytorchImg from "../public/img/skills/pytorch.svg";
import tensorflowImg from "../public/img/skills/tensorflow.svg";
import pythonImg from "../public/img/skills/python.svg";

const skills = [
  {
    id: 1,
    title: "Programming Languages",
    subSkills: [
      { name: "Java", image: javaImg },
      { name: "Python", image: pythonImg },
      { name: "C++", image: cppImg },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    subSkills: [
      { name: "JavaScript", image: typescriptImg },
      { name: "HTML", image: reactImg },
      { name: "CSS", image: cImg },
    ],
  },

  {
    id: 5,
    title: "Database & Analytics",
    subSkills: [
      { name: "MySQL", image: odataImg },
      { name: "Power BI", image: sapImg },
      { name: "MS Access", image: nodeImg },
    ],
  },
  {
    id: 4,
    title: "Networking & Security",
    subSkills: [
      { name: "Cybersecurity", image: csharpImg },
      { name: "Network Tools", image: gitImg },
      { name: "System Maintenance", image: dockerImg },
    ],
  },
  {
    id: 3,
    title: "artificial Intelligence & Machine Learning",
    subSkills: [
      { name: "TensorFlow", image: tensorflowImg },
      { name: "PyTorch", image: pytorchImg },
      { name: "Machine Learning", image: javaImg },
    ],
  },
  {
    id: 6,
    title: "Productivity Tools",
    subSkills: [
      { name: "Git and GitHub", image: gitImg },
      { name: "docker", image: dockerImg },
    ],
  },
];

export default skills;

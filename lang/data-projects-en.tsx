/**
 * Project information (English)
 */

import wallpaperGeneratorImg from "../public/img/projects/WallpaperGenerator.png";
import neuralNetworkFromScratchImg from "../public/img/projects/NeuralNetwork.png";
import rayTracingImg from "../public/img/projects/RayTracing.png";

const projects = [
  {
    id: 1,
    title: "E-Voting System (Zetech University)",
    description:
      "Designed and developed a secure voting system using PHP, JavaScript, and MySQL. Implemented voter authentication, real-time candidate display, and reliable result management.",
    image_path: wallpaperGeneratorImg,
    link: "#",
    color: "#c2410c",
  },
  {
    id: 2,
    title: "Student Systems Support",
    description:
      "During attachment at Kenya School of Agriculture, developed and maintained a student database operations, improved reliability, and supported system security against cyber threats.",
    image_path: neuralNetworkFromScratchImg,
    link: "#",
    color: "#0f766e",
  },
  {
    id: 3,
    title: "Election Operations",
    description:
      "Contributed to software ideas at the Zetech Night Hackathon and supported real student election operations by validating users and ensuring secure, smooth system usage.",
    image_path: rayTracingImg,
    link: "https://github.com/kipkorirfelix",
    color: "#6d28d9",
  },
];

export default projects;

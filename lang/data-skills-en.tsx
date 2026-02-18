/**
 * Skills information (English)
 */

import pythonImg from "../public/img/skills/python.svg";
import scikitLearnImg from "../public/img/skills/scikitlearn.svg";
import pandasImg from "../public/img/skills/pandas.svg";
import llmsImg from "../public/img/skills/llms.svg";
import flaskImg from "../public/img/skills/flask.svg";
import sqlAlchemyImg from "../public/img/skills/sqlalchemy.svg";
import restApiImg from "../public/img/skills/rest-api.svg";
import javaImg from "../public/img/skills/java.svg";
import javascriptImg from "../public/img/skills/javascript.svg";
import typescriptImg from "../public/img/skills/typescript.svg";
import astroImg from "../public/img/skills/astro.svg";
import tailwindCssImg from "../public/img/skills/tailwindcss.svg";
import sqliteImg from "../public/img/skills/sqlite.svg";
import postgresqlImg from "../public/img/skills/postgresql.svg";
import mysqlImg from "../public/img/skills/mysql.svg";
import mongodbImg from "../public/img/skills/mongodb.svg";
import dockerImg from "../public/img/skills/docker.svg";
import kubernetesImg from "../public/img/skills/kubernetes.svg";
import linuxImg from "../public/img/skills/linux.svg";
import homeServerImg from "../public/img/skills/home-server.svg";
import gitImg from "../public/img/skills/git.svg";
import githubImg from "../public/img/skills/github.svg";
import vscodeImg from "../public/img/skills/vscode.svg";
import kafkaImg from "../public/img/skills/kafka.svg";

const skills = [
  {
    id: 1,
    title: "AI & Machine Learning",
    subSkills: [
      { name: "Python", image: pythonImg },
      { name: "scikit-learn", image: scikitLearnImg },
      { name: "Pandas", image: pandasImg },
      { name: "LLMs", image: llmsImg },
    ],
  },
  {
    id: 2,
    title: "Backend & APIs",
    subSkills: [
      { name: "Flask", image: flaskImg },
      { name: "Java", image: javaImg },
      { name: "SQLAlchemy", image: sqlAlchemyImg },
      { name: "REST APIs", image: restApiImg },
    ],
  },

  {
    id: 3,
    title: "Frontend & Web",
    subSkills: [
      { name: "JavaScript", image: javascriptImg },
      { name: "TypeScript", image: typescriptImg },
      { name: "Astro", image: astroImg },
      { name: "Tailwind CSS", image: tailwindCssImg },
    ],
  },
  {
    id: 4,
    title: "Database Technologies",
    subSkills: [
      { name: "SQLite", image: sqliteImg },
      { name: "PostgreSQL", image: postgresqlImg },
      { name: "MySQL", image: mysqlImg },
      { name: "MongoDB", image: mongodbImg },
    ],
  },
  {
    id: 5,
    title: "DevOps & Infrastructure",
    subSkills: [
      { name: "Docker", image: dockerImg },
      { name: "Kubernetes", image: kubernetesImg },
      { name: "Linux", image: linuxImg },
      { name: "Home Server", image: homeServerImg },
    ],
  },
  {
    id: 6,
    title: "Essential Engineering Tools",
    subSkills: [
      { name: "Git", image: gitImg },
      { name: "GitHub", image: githubImg },
      { name: "VS Code", image: vscodeImg },
      { name: "Kafka", image: kafkaImg },
    ],
  },
];

export default skills;

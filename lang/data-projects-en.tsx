/**
 * Project information (English)
 */

import voterPredictionSystemImg from "../public/img/projects/VoterPredictionSystem.jpg";
import roadAccidentPredictionImg from "../public/img/projects/RoadAccidentPrediction.jpg";
import articlesApiImg from "../public/img/projects/ArticlesAPI.jpg";

const projects = [
  {
    id: 1,
    title: "Voter Prediction System (Flask + ML)",
    description:
      "AI-driven voting preference platform built with Flask, SQLAlchemy, and scikit-learn. Includes authentication, admin controls, model retraining, audit logs, and live model monitoring.",
    image_path: voterPredictionSystemImg,
    link: "https://github.com/kipkorirfelix/Votes-predicting-model-based-on-Social-Media-Usage-SMU-",
    color: "#0f766e",
  },
  {
    id: 2,
    title: "Road Accident Prediction Model",
    description:
      "Machine learning model in Python focused on road-accident prediction from structured input data, with trained-model artifact generation for practical inference workflows.",
    image_path: roadAccidentPredictionImg,
    link: "https://github.com/kipkorirfelix/road-accident-predicting-model",
    color: "#b45309",
  },
  {
    id: 3,
    title: "ArticlesAPI (Java Backend)",
    description:
      "Backend API project in Java focused on article service logic and endpoint-oriented architecture, demonstrating practical REST-style backend implementation.",
    image_path: articlesApiImg,
    link: "https://github.com/Felixtyler254/ArticlesAPI",
    color: "#0b3b8a",
  },
];

export default projects;

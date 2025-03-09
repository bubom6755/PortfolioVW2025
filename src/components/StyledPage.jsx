import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyledPage.css";
import img1 from "../assets/images/project1/img1.png";
import img2 from "../assets/images/project2/img2.png";
import img3 from "../assets/images/project3/img1.png";
import img4 from "../assets/images/project4/img1.png";
import img5 from "../assets/images/project5/img3.png";
import img6 from "../assets/images/project6/img1.png";
import "../styles/font.css";
import ScrambleText from "./Scrambletext";

const projects = [
  {
    id: 1,
    title: "#01",
    description: "Fairval",
    image: img1,
    type: "Web developpement",
  },
  {
    id: 2,
    title: "#02",
    description: "Pokédex",
    image: img2,
    type: "Web developpement",
  }, 
  {
    id: 3,
    title: "#03",
    description: "Joy",
    image: img6,
    type: "Web developpement/Design",
  },
  {
    id: 4,
    title: "#04",
    description: "The Demon Border",
    image: img4,
    type: "Web developpement",
  },
  {
    id: 5,
    title: "#05",
    description: "Casual Swim",
    image: img5,
    type: "Web developpement",
  },
  {
    id: 6,
    title: "#06",
    description: "Shenron",
    image: img3,
    type: "Web developpement",
  },
];

function StyledPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [animatePreview, setAnimatePreview] = useState(false);

  const navigate = useNavigate();

  const handleProjectHover = (project) => {
    setSelectedProject(project);
    setAnimatePreview(true);
  };

  const handleAnimationEnd = () => {
    setAnimatePreview(false);
  };

  const Goback = () => {
    navigate("/");
  };

  // 🔥 Mettre à jour GoON pour inclure l'ID du projet sélectionné
  const GoON = (id) => {
    navigate(`/project-detail/${id}`);
  };

  return (
    <div
      className="styled-page-container"
      style={{ fontFamily: "LEMONMILK-Light, Arial, sans-serif" }}
    >
      {/* Menu latéral gauche */}
      <div className="sidebar">
        <h1>Wambersie Victor</h1>
        <ul className="navigation">
          <li onClick={Goback}>Home</li>
          <li className="active">Work</li>
          <li onClick={Goback}>About</li>
        </ul>
      </div>

      {/* Liste des projets */}
      <div className="projects-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onMouseEnter={() => handleProjectHover(project)}
            onClick={() => GoON(project.id)}
          >
            <div className="project-title" style={{ marginRight: "5px"}} >{project.title}</div>
            <img src={project.image} alt={project.title} />
            <p> </p>
            <div className="project-description">{project.description}</div>
          </div>
        ))}
      </div>

      {/* Preview du projet sélectionné */}
      <div className="preview-container">
        <div className="preview2">
          <div className="preview-header">
            <h2
              style={{
                fontFamily: "LEMONMILK-Light, Arial, sans-serif",
              }}
            >
              <ScrambleText text={selectedProject.description} />
            </h2>
          </div>
          <div className="preview-desc">{selectedProject.type}</div>
          <div className="preview-desc">{selectedProject.title}</div>
        </div>
        <div className="preview" onClick={() => GoON(selectedProject.id)}>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className={animatePreview ? "preview-image animate" : "preview-image"}
            onAnimationEnd={handleAnimationEnd}
          />
          <div
            className="preview-text"
            style={{ fontFamily: "LEMONMILK-Light, Arial, sans-serif" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default StyledPage;

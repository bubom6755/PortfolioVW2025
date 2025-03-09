import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./projectDetail.css";
import "../styles/font.css";
import img1 from "../assets/images/project1/img1.png";
import img11 from "../assets/images/project1/ia.png";
import img12 from "../assets/images/project1/img4.jpeg";
import img13 from "../assets/images/project1/img5.png";
import img2 from "../assets/images/project2/img2.png";
import img3 from "../assets/images/project3/img1.png";
import img4 from "../assets/images/project4/img1.png";
import img5 from "../assets/images/project5/img3.png";
import img6 from "../assets/images/project6/img1.png";

const projects = [
  {
    id: 1,
    title: "Fairval",
    description: "Une plateforme de collaboration pour les experts de l'aviation et une ia juridique.",
    description2: "Lors de mon expérience chez eux, j'ai pu créer individuellement et entièrement une IA juridique en utilisant Python, du fine-tuning et du RAG avec un LLM local (LLaMA 3).    ",
    description3: "J'ai eu l'opportunité de concevoir et développer leur site web en utilisant WordPress, en prenant en charge la création de sa structure, l'intégration des différentes pages et fonctionnalités, ainsi que l'optimisation de l'expérience utilisateur. J'ai également personnalisé le site avec des thèmes et plugins adaptés aux besoins de l'entreprise, tout en veillant à améliorer ses performances et son référencement. Enfin, j'ai mis en place un système de gestion de contenu permettant aux équipes internes de modifier et ajouter facilement des informations.",
    details: "Fairval est une plateforme en ligne qui met en relation des experts en aviation avec des utilisateurs cherchant des conseils et des formations spécialisées. Le projet inclut des fonctionnalités avancées comme l'intégration API, une gestion des utilisateurs et une interface interactive.",
    technologies: ["Python", "WordPress", "BetterMode API"],
    date: "2025",
    categorie: ["Web developpement"," - AI"],
    images: [img1, img12, img11, img13],
    vue: " https://fairval.com"
  },
  {
    id: 2,
    title: "Pokédex",
    description: "Un Pokédex interactif utilisant l'API PokéAPI pour afficher les Pokémon.",
    details: "Ce projet permet aux utilisateurs de rechercher des Pokémon, d'afficher leurs statistiques et de voir leurs évolutions. Il utilise l'API PokéAPI et Material-UI pour un design fluide et intuitif.",
    technologies: ["React", " - Material-UI", " - PokéAPI"],
    date: "2024-10-21",
    categorie: ["Web developpement"," - Personal project"],
    images: [img2],
    vue: " https://pokedex-victor.vercel.app/"
  },
  {
    id: 6,
    title: "Shenron",
    description: "Un projet inspiré de Dragon Ball avec des animations et des effets interactifs.",
    details: "Ce projet expérimental utilise des animations avancées pour recréer l'invocation du dragon Shenron.",
    technologies: ["React", "Three.js", "GSAP"],
    date: "2024-11-05",
    images: [img3]
  },
  {
    id: 4,
    title: "The Demon Border",
    description: "Un jeu d'exploration sombre et mystérieux.",
    details: "Ce projet propose une ambiance immersive avec une narration captivante et des mécaniques de jeu intrigantes.",
    technologies: ["Unity", "C#", "Blender"],
    date: "2024-12-10",
    images: [img4]
  },
  {
    id: 5,
    title: "Casual Swim",
    description: "Une expérience visuelle interactive sur le thème aquatique.",
    details: "Ce projet explore la fluidité et la dynamique de l'eau à travers des simulations interactives.",
    technologies: ["p5.js", "WebGL", "CSS Animations"],
    date: "2025-01-15",
    images: [img5]
  },
  {
    id: 3,
    title: "Joy",
    description: "Une expérience visuelle interactive sur le thème aquatique.",
    details: "Ce projet explore la fluidité et la dynamique de l'eau à travers des simulations interactives.",
    technologies: ["p5.js", "WebGL", "CSS Animations"],
    date: "2025-01-15",
    images: [img6]
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="project-details-container">Projet non trouvé.</div>;
  }

  const goBack = () => navigate("/styledpage");
  const goToNextProject = () => {
    const nextIndex = (projects.findIndex((p) => p.id === project.id) + 1) % projects.length;
    navigate(`/project-detail/${projects[nextIndex].id}`);
  };
  const goToBeforeProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === project.id);
    const previousIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1; 
    navigate(`/project-detail/${projects[previousIndex].id}`);
  };
  
  

  return (
    <>
        <div className="sidebar-bar" onClick={goBack}>
        <p className="sidebar-text">All projects</p>
        </div>

            <div className="projects-banner">
        <img src={project.images[0]} alt={project.title} className="banner" />
        </div>
    <div className="projects-details-container">
      <div className="projects-content">
      <div className="projects-info">
        <div className="top-pro">
      <h2 className="projects-title"
      style={{ fontFamily: "LEMONMILK-Light, Arial, sans-serif" }}>{project.title}</h2>
      <h2 className="projects-title"
      style={{ fontFamily: "LEMONMILK-Light, Arial, sans-serif" }}>#{project.id}</h2>
      </div>
      <hr className="projects-divider"/>


        <div className="projects-meta-container">
            <div className="meta-info">
      <p className="projects-meta" 
      style={{ fontFamily: "LEMONMILK-Light, Arial, sans-serif" }}>
        <strong>Technologies :</strong> {project.technologies}
      </p>
      <p className="projects-meta"
      style={{ fontFamily: "LEMONMILK-Light, Arial, sans-serif" }}>
        <strong>Date :</strong> {project.date}
      </p>
      <p className="projects-meta"
      style={{ fontFamily: "LEMONMILK-Light, Arial, sans-serif" }}>
        <strong>Categorie :</strong> {project.categorie}
      </p>
      <p className="projects-meta" style={{ fontFamily: "LEMONMILK-Light, Arial, sans-serif" }}>
  <strong>Website :</strong> 
  <a href={project.vue} target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
    {project.vue}
  </a>
</p>

      </div>
      <div className="meta-info2" style={{ fontFamily: "LEMONMILK-Light, Arial, sans-serif" }}>
      <p className="projects-details"style={{ margin : 0 }}>{project.details}</p>
      </div>
        </div>
    </div>

        <div className="projects-section">
          <p className="projects-description">{project.description}</p>
          <img src={project.images[0]} alt={project.title} className="projects-image" />
        </div>
        <div className="projects-section reverse">
          <img src={project.images[1]} alt={project.title} className="projects-image" />
          <p className="projects-details">{project.details}</p>
        </div>
      </div>
      <div className="projects-content">
        <div className="projects-section">
          <p className="projects-description">{project.description2}</p>
          <img src={project.images[2]} alt={project.title} className="projects-image" />
        </div>
        <div className="projects-section reverse">
          <img src={project.images[3]} alt={project.title} className="projects-image" />
          <p className="projects-details">{project.description3}</p>
        </div>
      </div>
      <div className="projects-buttons">
        <button onClick={goToBeforeProject} className="projects-button">Back</button>
        <button onClick={goToNextProject} className="projects-button">Next</button>
      </div>
    </div>
    </>
  );
};

export default ProjectDetails;

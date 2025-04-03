import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./projectDetail.css";
import "../styles/font.css";
import img1 from "../assets/images/project1/img1.png";
import img11 from "../assets/images/project1/ia.png";
import img12 from "../assets/images/project1/img4.jpeg";
import img13 from "../assets/images/project1/img5.png";
import img2 from "../assets/images/project2/img2.png";
import img22 from "../assets/images/project2/PokedexList.webp";
import img21 from "../assets/images/project2/img1.png";
import img23 from "../assets/images/project2/img3.png";
import img3 from "../assets/images/project3/img1.png";
import img32 from "../assets/images/project3/img2.png";
import img31 from "../assets/images/project3/img3.png";
import img33 from "../assets/images/project3/img4.png";
import img4 from "../assets/images/project4/img1.png";
import img41 from "../assets/images/project4/img2.png";
import img42 from "../assets/images/project4/img3.png";
import img43 from "../assets/images/project4/img4.png";
import img5 from "../assets/images/project5/img3.png";
import img51 from "../assets/images/project5/img1.png";
import img52 from "../assets/images/project5/img2.png";
import img53 from "../assets/images/project5/img4.png";
import img6 from "../assets/images/project6/img1.png";
import img61 from "../assets/images/project6/img2.png";
import img62 from "../assets/images/project6/img3.png";
import img63 from "../assets/images/project6/img4.png";

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
    description: "Mon Pokédex interactif, développé en React, permet d'explorer tous les Pokémon en temps réel grâce à une API et offre une expérience immersive avec un design soigné.",
    description2:"Grâce à un sélecteur de langue intégré, je peux afficher les noms, descriptions et types des Pokémon dans différentes langues, rendant l'application accessible à un large public.",
    description3:"Avec une navigation fluide et un affichage dynamique, mon Pokédex propose une recherche intuitive et une interface responsive pour une exploration optimale de l'univers Pokémon.",
    details: "Ce projet permet aux utilisateurs de rechercher des Pokémon, d'afficher leurs statistiques et de voir leurs évolutions. Il utilise l'API PokéAPI et Material-UI pour un design fluide et intuitif.",
    technologies: ["React", " - Material-UI", " - PokéAPI"],
    date: "2024",
    categorie: ["Web developpement"," - Personal project"],
    images: [img2, img23, img21, img22],
    vue: " https://pokedex-victor.vercel.app/"
  },
  {
    id: 6,
    title: "Shenron",
    description: "Conçue spécialement pour l'école Shenron, Sign Connect répond aux besoins d’une gestion moderne des signatures. En combinant une technologie de scan performante et une sécurisation avancée des données, elle garantit une expérience utilisateur fiable et efficace.",
    description2: "Avec une navigation optimisée et un design pensé pour la praticité, Sign Connect offre une solution rapide et accessible pour signer en toute sécurité. Son intégration intuitive permet à chaque utilisateur de valider sa présence ou son engagement sans difficulté.",
    details: "Mon application mobile Sign Connect, développée en React, permet aux utilisateurs de scanner un QR code et de signer numériquement en toute simplicité. Grâce à une interface fluide et intuitive, elle facilite le processus de validation et d’authentification en quelques secondes.",
    technologies: ["React", " - Three.js", " - GSAP"],
    date: "2024",
    categorie: ["Web developpement",],
    images: [img3, img31, img32,img33],
    vue: " none"
  },
  {
    id: 4,
    title: "The Demon Border",
    description: "Mon jeu The Demon Border, développé avec le moteur Godot, plonge les joueurs dans un univers sombre et captivant. J’ai conçu à la fois la direction artistique et le code, offrant une expérience immersive où chaque détail visuel et mécanique a été soigneusement pensé.",
    description2:"Avec une atmosphère unique et un gameplay engageant, The Demon Border propose des défis intenses et une progression rythmée. Grâce à un travail minutieux sur la DA et le level design, chaque environnement renforce l’immersion dans ce monde mystérieux et dangereux.",
    description3:"Alliant esthétique travaillée et mécaniques de jeu dynamiques, The Demon Border est une aventure qui met à l’épreuve les réflexes et la stratégie des joueurs. Son univers visuel et son gameplay fluide font de ce projet une expérience unique pour les amateurs de jeux indépendants.",
    details: "Ce projet propose une ambiance immersive avec une narration captivante et des mécaniques de jeu intrigantes.",
    technologies: ["Godot", " - Photoshop", " - Illustrator"],
    date: "2024",
    categorie: ["Web developpement"," - Personal project"],
    images: [img4, img41, img42, img43],
    vue: " none"
  },
  {
    id: 5,
    title: "Casual Swim",
    details: "Mon projet Casual Swim est un site e-commerce dédié aux maillots de bain féminins, conçu sur Wix. J’ai entièrement réalisé la plateforme ainsi que l’identité visuelle de la marque, en mettant en avant un design épuré et une expérience utilisateur fluide.",
    description: "Alliant esthétique et fonctionnalité, Casual Swim propose une navigation intuitive et un univers visuel harmonieux, pensé pour refléter l’élégance et la modernité des collections. Chaque élément du site a été conçu pour offrir une expérience d’achat agréable et immersive.",
    description2:"Casual Swim, c'est bien plus qu’un simple site de vente, c’est une marque avec une identité forte que j’ai développée à travers un design soigné et une direction artistique cohérente. De la palette de couleurs aux visuels, tout a été pensé pour créer une expérience unique et captivante.",
    description3:"Un travail minutieux a été réalisé sur l’ergonomie et l’expérience utilisateur pour maximiser l’engagement et la conversion. Les visuels et mises en page ont été pensés pour sublimer chaque produit et captiver l’attention des clientes.",
    technologies: ["Wix", " - Illustrator"],
    date: "2023",
    categorie: ["Web developpement"," - Personal project"],
    images: [img5, img51, img52, img53],
    vue: " none"
  },
  {
    id: 3,
    title: "Joy",
    description: "Le site a été développé avec une attention particulière aux performances et à la compatibilité sur tous les appareils. Grâce à une structure claire et un design responsive, Joy offre une expérience d’achat agréable et immersive.",
    details: "Mon projet Joy est un site e-commerce dédié à la vente de bougies, développé en HTML, CSS et PHP. J’ai conçu l’intégralité du site ainsi que l’identité visuelle de la marque, en créant un univers chaleureux et raffiné..",
    description2:"Le design du site a été soigneusement travaillé pour refléter l’élégance et l’artisanat des bougies Joy. J’ai réalisé le logo, la palette de couleurs et l’ensemble des visuels afin d’offrir une identité forte et cohérente à la marque.",
    description3:"L’expérience utilisateur a été optimisée grâce à une navigation fluide et intuitive, permettant aux visiteurs de découvrir facilement les différentes collections et de passer commande en toute simplicité.",
    technologies: ["PHP", " - HTML", " - CSS Animations"],
    date: "2023",
    categorie: ["Web developpement"," - Personal project"],
    images: [img6 , img61, img62, img63],
    vue: " none"
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
  <a href={project.vue} target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: " none" }}>
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

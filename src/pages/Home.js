import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SphereAnimation from "../components/SphereParticles";
import "../styles/font.css";
import { Link } from "react-router-dom";
import ScrollButton from "../components/ScrollButton";
import Products from "../components/Products";
import Contact from "../components/contact";
import { useLanguage } from "../components/languageContext"; // Importation du contexte

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const contactRef = useRef(null);
  const { language, setLanguage } = useLanguage(); // Utilisation du contexte

  const translations = {
    en: {
      works: "WORKS",
      chatbot: "CHATBOT",
      contact: "CONTACT",
      designer: "DESIGNER",
      developer: "DEVELOPER",
      intro:
        "I AM A FRONT-END DEVELOPER BASED IN SOPHIA ANTIPOLIS. I ENJOY TACKLING COMPLEX CHALLENGES WHILE DELIVERING SIMPLE AND ELEGANT DESIGNS. I HAVE EXPERIENCE WORKING WITH MODERN WEB TECHNOLOGIES SUCH AS REACT, ANGULAR, PYTHON, JAVASCRIPT, HTML, CSS, PHP, AND MYSQL. I ALSO CREATED AN ARTIFICIAL INTELLIGENCE TO BUILD INNOVATIVE SOLUTIONS.",
      contactMe: "CONTACT ME",
      info: "Portfolio currently being created",
    },
    fr: {
      works: "TRAVAUX",
      chatbot: "CHATBOT",
      contact: "CONTACT",
      designer: "DESIGNER",
      developer: "DEVELOPER",
      intro:
        "JE SUIS UN DÉVELOPPEUR FRONT-END BASÉ À SOPHIA ANTIPOLIS. J'AIME RELEVER DES DÉFIS COMPLEXES TOUT EN PROPOSANT DES DESIGNS SIMPLES ET ÉLÉGANTS. J'AI DE L'EXPÉRIENCE AVEC LES TECHNOLOGIES WEB MODERNES COMME REACT, ANGULAR, PYTHON, JAVASCRIPT, HTML, CSS, PHP ET MYSQL. J'AI AUSSI CRÉÉ UNE INTELLIGENCE ARTIFICIELLE POUR DÉVELOPPER DES SOLUTIONS INNOVANTES.",
      contactMe: "ME CONTACTER",
      info: "Portfolio actuellement en cours de création",
    },
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomeContainer
      onMouseMove={handleMouseMove}
      style={{ "--x": `${mousePos.x}px`, "--y": `${mousePos.y}px` }}
    >
      <Header className={isScrolled ? "scrolled" : ""}>
        <LeftHeader>
          <h1>Victor Wambersie</h1>
          <span>Front-end, DEVELOPER</span>
        </LeftHeader>
        <MidHeader>
          <nav>
            <ul>
              <li>
                <Link to="/styledpage">{translations[language].works}</Link>
              </li>
              <li>
                <Link to="/chatbotpage">{translations[language].chatbot}</Link>
              </li>
              <li onClick={scrollToContact}>
                <a>{translations[language].contact}</a>
              </li>
            </ul>
          </nav>
        </MidHeader>
        <RightHeader>
          <nav>
            <ul>
              <li onClick={() => setLanguage("fr")}>
                <a>FRANCAIS</a>
              </li>
              <li onClick={() => setLanguage("en")}>
                <a>ENGLISH</a>
              </li>
            </ul>
          </nav>
        </RightHeader>
      </Header>

      <MainContent>
        <LeftSection>
          <SmallText>creative</SmallText>
          <BigTitle>
            <div>
              <h2>{translations[language].designer}</h2>
            </div>
            <h2>{translations[language].developer}</h2>
          </BigTitle>
          <a>{translations[language].info}</a>
        </LeftSection>
        <CenterSection>
          <SphereAnimation />
        </CenterSection>
        <RightSection>
          <RightSectionP>
            <p>{translations[language].intro}</p>
            <ContactButton onClick={scrollToContact}>
              {translations[language].contactMe}
            </ContactButton>
          </RightSectionP>
          <ScrollButton />
        </RightSection>
      </MainContent>
      <MainContent3>
        <Products language={language} />
      </MainContent3>
      <div ref={contactRef}>
        <Contact />
      </div>
    </HomeContainer>
  );
}
export default Home;

export const HomeContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: "LEMONMILK-Light", Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

/* HEADER */
export const Header = styled.header`
  position: sticky; /* Reste collé en haut */
  top: 0;
  z-index: 999; /* Toujours au-dessus du contenu */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0); /* Transparent par défaut */
  backdrop-filter: blur(0px); /* Pas de flou par défaut */
  border-bottom: 1px solid transparent; /* Invisible par défaut */
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease,
    border-bottom 0.3s ease;

  /* Appliquer les styles lorsque la page est scrollée */
  &.scrolled {
    background-color: rgba(255, 255, 255, 0.2); /* Blanc semi-transparent */
    backdrop-filter: blur(5px); /* Ajoute un léger flou */
    border-bottom: 1px solid rgba(255, 255, 255, 0.3); /* Bordure visible */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Légère ombre pour le grain */
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LeftHeader = styled.div`
  h1 {
    font-size: 1rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  span {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;
export const MidHeader = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;

    li {
      cursor: pointer;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 1px;

      a {
        color: white; /* Couleur par défaut du texte */
        text-decoration: none; /* Pas de soulignement */
        transition: color 0.2s ease;

        &:hover {
          text-decoration: underline;
        }

        &:visited,
        &:active {
          color: white;
        }
      }
    }
  }
`;
export const RightHeader = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;

    li {
      cursor: pointer;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 1px;

      a {
        color: white; /* Couleur par défaut du texte */
        text-decoration: none; /* Pas de soulignement */
        transition: color 0.2s ease;

        &:hover {
          text-decoration: underline;
        }

        &:visited,
        &:active {
          color: white;
        }
      }
    }
  }
`;

/* ----------------------- */
/*  MAIN CONTENT  (3 colonnes) */
/* ----------------------- */
export const MainContent = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 0.8fr 1.8fr 0.8fr; /* 3 colonnes */
  column-gap: 2rem;
  padding: 2rem 3rem;
  margin-bottom: 200px;

  /* --- MEDIA QUERIES pour tablette (max-width: 992px) --- */
  @media (max-width: 992px) {
    /* Passe en 2 colonnes : gauche + (centre+droite) */
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    margin-bottom: 100px;
  }

  /* --- MOBILE (max-width: 600px) : une seule colonne --- */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-bottom: 80px;
  }
`;

export const MainContent2 = styled.main`
  flex: 1;
  display: flex;
  padding: 2rem 3rem;
  margin-bottom: 200px;

  /* --- MOBILE (max-width: 600px) : stack en colonne --- */
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }
`;
export const MainContent3 = styled.main`
  flex: 1;
  display: grid;
  flex-direction: row-reverse;
  padding: 2rem 3rem;
  margin-bottom: 200px;

  /* --- MOBILE (max-width: 600px) : stack en colonne --- */
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 80px;
  }
`;

/* SECTION GAUCHE (GROS TEXTE) */
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;

  /* Sur tablette, la hauteur auto pour éviter tout débordement */
  @media (max-width: 992px) {
    height: auto;
  }

  /* Sur mobile, on aligne plutôt en haut */
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const BigTitle = styled.div`
  font-family: "Tusker Grotesk", sans-serif;
  text-transform: uppercase;

  h2 {
    font-size: 22rem;
    font-weight: 700;
    line-height: 1;
    margin: 0;
    letter-spacing: 0.5rem;
  }

  /* -- Sur tablette -- */
  @media (max-width: 992px) {
    h2 {
      font-size: 12rem; /* Réduit le texte massif */
      letter-spacing: 0.3rem;
    }
  }

  /* -- Sur mobile -- */
  @media (max-width: 600px) {
    h2 {
      font-size: 7rem; /* Encore plus réduit */
      letter-spacing: 0.2rem;
      align-items: center;
    }
  }
`;

/* SmallText (creative) */
export const SmallText = styled.span`
  font-family: "Bodoni Moda", serif;
  font-style: italic;
  font-size: 1.8rem;
  color: #ccc;
  margin-bottom: 1rem;

  /* -- Sur tablette -- */
  @media (max-width: 992px) {
    font-size: 1.4rem;
  }

  /* -- Sur mobile -- */
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

/* SECTION MILIEU (LOSANGE / SPHERE ANIMATION) */
export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* SECTION DROITE (TEXTE + BOUTON) */
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 400px;
  height: 83vh;

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  /* -- Sur tablette -- */
  @media (max-width: 992px) {
    max-width: 100%;
    align-items: flex-start;
  }

  /* -- Sur mobile -- */
  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;
export const RightSectionP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 600px) {
    align-items: center;
  }
`;
export const ContactButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid #fff;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: black;
    color: white;
  }
`;

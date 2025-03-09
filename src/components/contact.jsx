import React, { useState, useContext } from "react";
import { useLanguage } from "../components/languageContext"; // Importation du contexte

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { language } = useLanguage(); // Utilisation du contexte

  const translations = {
    en: {
      contactMe: "Contact Me",
      name: "Name",
      email: "Email",
      message: "Your message",
      send: "SEND",
      infoTitle: "Victor Wambersie",
      emailLabel: "Email:",
      githubLabel: "GitHub:",
      locationLabel: "Location:",
      hardSkillsLabel: "Hard Skills:",
      passionsLabel: "Passions:",
      passionsLabel2: " Rally, design, drawing, web development",
      hobbiesLabel: "Hobbies:",
      hobbiesLabel2: "Basketball, drawing, video games",
      futureProjectsLabel: "Future Projects:",
      futureProjectsLabel2: "Creating 3D websites",
    },
    fr: {
      contactMe: "Me Contacter",
      name: "Nom",
      email: "Email",
      message: "Votre message",
      send: "ENVOYER",
      infoTitle: "Victor Wambersie",
      emailLabel: "Email :",
      githubLabel: "GitHub :",
      locationLabel: "Localisation :",
      hardSkillsLabel: "Compétences Techniques :",
      passionsLabel: "Passions :",
      passionsLabel2: " Rally, design, dessin, développement web",
      hobbiesLabel: "Loisirs :",
      hobbiesLabel2: "Basket, dessiner, jeux vidéos",
      futureProjectsLabel: "Projets Futurs :",
      futureProjectsLabel2: "Créer des sites en 3D",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:victor.wambersie@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Message from ${formData.name}:\n\n${formData.message}\n\nYou can reach me at: ${formData.email}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div style={styles.container}>
      {/* Formulaire de contact */}
      <div style={styles.contactForm}>
        <h2 style={styles.title}>{translations[language].contactMe}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder={translations[language].name}
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder={translations[language].email}
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder={translations[language].message}
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={styles.textarea}
            required
          ></textarea>
          <button type="submit" style={styles.button}>
            {translations[language].send}
          </button>
        </form>
      </div>

      {/* Informations */}
      <div style={styles.infoSection}>
        <h2 style={styles.title}>{translations[language].infoTitle}</h2>
        <p style={styles.text}>
          <strong style={{ color: "#686aff" }}>{translations[language].emailLabel}</strong>{" "}
          <a href="mailto: victor.wambersie@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>
            victor.wambersie@gmail.com
          </a>
        </p>
        <p style={styles.text}>
          <strong style={{ color: "#686aff" }}>{translations[language].githubLabel}</strong>{" "}
          <a
            href="https://github.com/bubom6755"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            github.com/bubom6755
          </a>
        </p>
        <p style={styles.text}>
          <strong>{translations[language].locationLabel}</strong> Antibes, Cannes, Nice (France)
        </p>
        <p style={styles.text}>
          <strong style={{ color: "#686aff" }}>{translations[language].hardSkillsLabel}</strong> HTML, CSS, JavaScript, TypeScript, React, Angular, Laravel, MySQL, WordPress, PHP
        </p>
        <p style={styles.text}>
          <strong>{translations[language].passionsLabel}</strong>{translations[language].passionsLabel2}
        </p>
        <p style={styles.text}>
          <strong>{translations[language].hobbiesLabel}</strong> {translations[language].hobbiesLabel2}
        </p>
        <p style={styles.text}>
          <strong>{translations[language].futureProjectsLabel}</strong> {translations[language].futureProjectsLabel2}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
    border: "1px solid #fff",
    maxWidth: "1500px",
    margin: "auto",
    gap: "20px",
  },
  contactForm: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRight: "1px solid #fff",
  },
  infoSection: {
    flex: 1,
    padding: "20px",
  },
  title: {
    fontFamily: "LEMONMILK-Light, sans-serif",
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "left",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    fontFamily: "LEMONMILK-Light, sans-serif",
    fontSize: "16px",
    padding: "10px",
    border: "1px solid #fff",
    backgroundColor: "#000",
    color: "#fff",
  },
  textarea: {
    fontFamily: "LEMONMILK-Light, sans-serif",
    fontSize: "16px",
    padding: "15px",
    height: "200px",
    border: "1px solid #fff",
    backgroundColor: "#000",
    color: "#fff",
  },
  button: {
    fontFamily: "LEMONMILK-Light, sans-serif",
    fontSize: "16px",
    padding: "10px",
    border: "1px solid #fff",
    backgroundColor: "#fff",
    color: "#000",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  text: {
    fontFamily: "LEMONMILK-Light, sans-serif",
    fontSize: "16px",
    lineHeight: "2.5",
    margin: "10px 0",
  },
  link: {
    color: "#fff",
    textDecoration: "underline",
    transition: "opacity 0.3s",
  },
};

export default Contact;

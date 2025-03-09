import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";
import { useNavigate } from "react-router-dom";

// Questions/réponses prédéfinies
const predefinedQA = [
  // Anglais
  {
    question: "hello, hi",
    answer: " Hello! How can I assist you?",
  },
  {
    question: "Who is he? the creator of this portfolio, Victor Wambersie",
    answer: " The creator is Victor Wambersie, a developer specialized in web development, data science, and AI.",
  }, 
  {
    question: "What does he do? Can you tell me about his projects? what has he done?",
    answer: " He has completed various projects, including creating a legal AI locally for Fairval, building websites, and working on a 3D site creation project.",
    hasButton: true,
  },
  {
    question: "What programming languages does he use? what technologies does he use?",
    answer: " He is skilled in HTML, CSS, JavaScript, TypeScript, React, Angular, Laravel, MySQL, WordPress, and PHP.",
  },
  {
    question: "Where is he located? where does he live? where does he work?",
    answer: " He is located in the region of Antibes, Cannes, Nice (France).",
  },
  {
    question: "Is he looking for an internship, an alternance, or a job?",
    answer: " Yes, he's looking for an alternance in web development or data science.",
  },
  {
    question: "How can I contact him, how to reach him, his email address?",
    answer: " You can contact him via his email address: victor.wambersie@gmail.com",
  },
  {
    question: "Does he have a GitHub?",
    answer: " Yes, here is his GitHub: https://github.com/bubom6755",
  },
  {
    question: "What are his skills? Can you tell me about his competencies?",
    answer: " His skills include HTML, CSS, JavaScript, TypeScript, React, Angular, Laravel, MySQL, WordPress, and PHP.",
  },
  {
    question: "What are his passions and hobbies?",
    answer: " He is passionate about rally racing, design, drawing, and web development. His hobbies include basketball, drawing, and video games.",
  },
  {
    question: "How does he define himself?",
    answer: " He loves discovering new things and pushing his limits.",
  },
  {
    question: "Can you tell me about his studies and experience?",
    answer: " He studied at MyDigitalSchool (2022-2024) in a general curriculum focusing on digital marketing, graphic design, and web development. Currently, he is studying at Ynov Campus (2024-2027) specializing in web development. His experiences include a 3-month internship in graphic design at Com & Gifts, creating a legal AI locally for Fairval, and building websites.",
  },
  {
    question: "What are his future projects?",
    answer: " He is working on creating 3D websites and aims to innovate in web design.",
  },
  
  // Français
  {
    question: 'bonjour',
    answer: ' Bonjour ! Comment puis-je vous aider ?',
  },
  {
    question: "Qui est-il ? le créateur de ce portfolio, Victor Wambersie",
    answer: " Le créateur est Victor Wambersie, un développeur spécialisé en développement web, data science et IA.",
  },
  {
    question: "Quelles sont ses compétences ?",
    answer: " Ses compétences incluent HTML, CSS, JavaScript, TypeScript, React, Angular, Laravel, MySQL, WordPress, et PHP.",
  },
  {
    question: "Où se situe-t-il ? où est-il situé, localisé ?",
    answer: " Il est situé dans la région d'Antibes, Cannes, Nice (France).",
  },
  {
    question: "Recherche-t-il un stage ou une alternance ou un travail ?",
    answer: " Oui, il est à la recherche d'une alternance en développement web ou en data science.",
  },
  {
    question: "Peux-tu me parler de ses projets ? Que fait-il ? Parle-moi de tes projets.",
    answer: " Il a réalisé divers projets, comme la création d'une IA juridique pour Fairval, la création de sites internet, et il travaille sur un projet de création de sites 3D.",
    hasButton: true,
  },
  {
    question: "Comment puis-je le contacter, comment le joindre, son adresse mail ?",
    answer: " Vous pouvez le contacter via son adresse mail : victor.wambersie@gmail.com",
  },
  {
    question: "A-t-il un GitHub ?",
    answer: " Oui, voici son GitHub : https://github.com/bubom6755",
  },
  {
    question: "Quelles sont ses passions et ses hobbies ?",
    answer: " Il est passionné par le rallye, le design, le dessin, et le développement web. Ses hobbies incluent le basket, le dessin, et les jeux vidéo.",
  },
  {
    question: "Comment se définit-il ?",
    answer: " Il adore découvrir de nouvelles choses et se pousser à ses limites.",
  },
  {
    question: "Peux-tu me parler de ses études et expériences ?",
    answer: " Il a étudié à MyDigitalSchool (2022-2024) dans un cursus général orienté marketing digital, graphisme et développement web. Actuellement, il étudie à Ynov Campus (2024-2027) en développement web. Ses expériences incluent un stage de 3 mois en graphisme chez Com & Gifts, la création d'une IA juridique pour Fairval, et la réalisation de sites internet.",
  },
  
];

// Fuzzy matching (simpliste)
function getSimilarityScore(input, target) {
  const clean = (str) =>
    str
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, "") // retire la ponctuation
      .split(/\s+/);

  const inWords = clean(input);
  const tarWords = clean(target);

  let matches = 0;
  inWords.forEach((w) => {
    if (tarWords.includes(w)) {
      matches++;
    }
  });

  const totalWords = inWords.length + tarWords.length || 1;
  return (2 * matches) / totalWords; // ratio
}

function findPredefinedAnswer(userInput, threshold = 0.3) {
  let bestScore = 0;
  let bestAnswer = null;

  predefinedQA.forEach((item) => {
    const score = getSimilarityScore(userInput, item.question);
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.answer;
    }
  });

  return bestScore >= threshold ? bestAnswer : null;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
  
    const [typingText, setTypingText] = useState("");
    const typingIndexRef = useRef(0);
    const typingIntervalRef = useRef(null);
  
    const navigate = useNavigate();
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight / 3) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const toggleChatbot = () => {
      setIsOpen(!isOpen);
    };
  
    const typeResponse = (fullText, hasButton = false) => {
      typingIndexRef.current = 0;
      setTypingText("");
  
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
  
      typingIntervalRef.current = setInterval(() => {
        setTypingText((prev) => prev + fullText.charAt(typingIndexRef.current));
        typingIndexRef.current++;
  
        if (typingIndexRef.current >= fullText.length) {
          clearInterval(typingIntervalRef.current);
  
          // Ajouter la réponse complète aux messages
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: fullText, hasButton },
          ]);
          setTypingText("");
        }
      }, 25);
    };
  
    const handleSendMessage = (e) => {
      e.preventDefault();
      const userMsg = inputValue.trim();
      if (!userMsg) return;
  
      setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
      setInputValue("");
  
      const matchedAnswer = predefinedQA.find((qa) =>
        getSimilarityScore(userMsg, qa.question) > 0.3
      );
  
      if (matchedAnswer) {
        typeResponse(matchedAnswer.answer, matchedAnswer.hasButton);
      } else {
        typeResponse("I'm not sure I understand. Please ask me something else.");
      }
    };
  


    const handleRedirect = () => {
      navigate("/styledpage");
    };
  
    return (
      <>
        {isVisible && (
          <div className="chatbot-container">
            <div
              className={`chatbot-bubble ${isOpen ? "hidden" : ""}`}
              onClick={toggleChatbot}
            >
              💬
            </div>
  
            {isOpen && (
              <div className="chatbot-modal">
                <button className="chatbot-close" onClick={toggleChatbot}>
                  ✖
                </button>
                <div className="chatbot-content">
                  <h4>Chatbot</h4>
  
                  <div className="chatbot-messages">
                    {messages.length === 0 && (
                      <div className="chatbot-placeholder">
                        <p>Try asking me:</p>
                        <ul>
                          <li>Who is the creator of this portfolio?</li>
                          <li>What technologies does he use?</li>
                          <li>Where is he located?</li>
                          <li>Is he looking for an internship?</li>
                        </ul>
                      </div>
                    )}
  
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`chatbot-message ${
                          msg.sender === "user" ? "user-message" : "bot-message"
                        }`}
                      >
                        {msg.text}
                        {/* Affiche un bouton si `hasButton` est défini */}
                        {msg.hasButton && (
                          <button
                            className="chatbot-redirect-btn"
                            onClick={handleRedirect}
                          >
                            View Projects
                          </button>
                        )}
                      </div>
                    ))}
  
                    {typingText && (
                      <div className="chatbot-message bot-message">
                        {typingText}
                      </div>
                    )}
                  </div>
  
                  <form className="chatbot-form" onSubmit={handleSendMessage}>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me a question..."
                    />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </>
    );
  };
  
  export default Chatbot;
  

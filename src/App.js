import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./components/ProjectsShowcase";
import ProjectPreview from "./components/ProjectPreview";
import StyledPage from "./components/StyledPage";
import CustomCursor from "./components/CustomCursor";
import Loader2 from "./components/Loader2";
import Chatbot from "./components/Chatbot";
import ProjectDetails from "./components/ProjectDetails";
import { LanguageProvider } from "./components/languageContext";
import FullPageChatbot from "./components/FullPageChatbot";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Chatbot />
        <CustomCursor />
        <PageWrapper />
      </Router>
    </LanguageProvider>
  );
}

function PageWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    return () => clearTimeout(timeout);
  }, [location.pathname]); // Recharge l'effet au changement de page

  return isLoading ? (
    <Loader2 />
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbotpage" element={<FullPageChatbot />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/project-preview" element={<ProjectPreview />} />
      <Route path="/styledpage" element={<StyledPage />} />
      {/* Ajout du paramètre dynamique `:id` pour gérer les détails des projets */}
      <Route path="/project-detail/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;

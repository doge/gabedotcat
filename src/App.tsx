import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Container from "./components/Container";
import Header from "./components/Header";

import LanguageData from "../public/language.json";
import LanguagePicker, { Language } from "./components/LanguagePicker";

import About from "./pages/About";
import Repositories from "./pages/Repositories";

import "./App.css";

function App() {
  const [language, setLanguage] = React.useState<keyof Language>("en");
  const currentLanguageData = LanguageData[language];

  const navigator = useNavigate();

  return (
    <>
      <Container>
        <div className="grid">
          <LanguagePicker
            language={language}
            onLanguageChange={(requestedLang: keyof Language) => {
              setLanguage(requestedLang);
            }}
          />
          <Header {...currentLanguageData} navigate={navigator} />
        </div>

        <Container>
          <Routes>
            <Route
              index
              element={<About language={language} navigate={navigator} />}
            />
            <Route
              index
              path="/about"
              element={<About language={language} navigate={navigator} />}
            />
            <Route
              index
              path="/repositories"
              element={<Repositories language={language} />}
            />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </Container>
      </Container>
    </>
  );
}

export default App;

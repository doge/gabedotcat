import React from "react";
import "./App.css";
import Card from "./components/Card";

import Container from "./components/Container";
import Header from "./components/Header";
import { GitHubResponse } from "./Response";
import LanguagePicker, { Language } from "./components/LanguagePicker";

import LanguageData from "../public/language.json";

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [gitRepositories, setGitRepositories] = React.useState([]);
  const [language, setLanguage] = React.useState<keyof Language>("en");

  const currentLanguageData = LanguageData[language];

  React.useEffect(() => {
    if (!isLoaded) {
      fetch("https://api.github.com/users/doge/repos")
        .then((res) => res.json())
        .then(
          (result) => {
            // Sort the response by the newest date first
            result.sort(function (a: GitHubResponse, b: GitHubResponse) {
              return new Date(b.pushed_at).valueOf() -
                new Date(a.pushed_at).valueOf();
            });

            setIsLoaded(true);
            setGitRepositories(result);
          },
          (_) => {
            setIsLoaded(false);
          },
        );
    }
  });

  return (
    <>
      <Container>
        <div className="grid grid-rows-2">
          <LanguagePicker
            language={language}
            onLanguageChange={(requestedLang: keyof Language) => {
              setLanguage(requestedLang);
            }}
          />
          <Header {...currentLanguageData} />
        </div>

        {!isLoaded && (
          <>
            loading {currentLanguageData.repo_title}...
          </>
        )}

        {isLoaded && (
          <>
            <Container>
              <h2 className="font-medium text-2xl mb-4 mt-2">
                {currentLanguageData.repo_title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center">
                {gitRepositories.slice(0, 9).map((repo: GitHubResponse) => (
                  <Card {...repo} />
                ))}
              </div>
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default App;

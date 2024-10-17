import React from "react";

import Card from "../components/Card";
import { GitHubResponse } from "../Response";

import LanguageData from "../../public/language.json";
import { Language } from "../components/LanguagePicker";

export interface RepositoryProps {
  language: keyof Language;
}

export default function Repositories(props: RepositoryProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [gitRepositories, setGitRepositories] = React.useState([]);

  const currentLanguageData = LanguageData[props.language];

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

  if (!isLoaded) return <>loading {currentLanguageData.repo_title}...</>;
  else {
    return (
      <>
        <h2 className="font-medium text-2xl mb-4">
          {currentLanguageData.repo_title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center">
          {gitRepositories.slice(0, 9).map((repo: GitHubResponse) => (
            <Card {...repo} />
          ))}
        </div>
      </>
    );
  }
}

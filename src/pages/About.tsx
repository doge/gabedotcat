import LanguageData from "../../public/language.json";
import { NavigateFunction } from "react-router-dom";
import { Language } from "../interfaces/LanguagePicker";

export interface AboutProps {
  language: keyof Language;
  navigate: NavigateFunction;
}

export default function About(props: AboutProps) {
  const currentLanguageData = LanguageData[props.language];

  return (
    <>
      <h2 className="font-medium text-2xl mb-4 text-center">
        {currentLanguageData.about_title}
      </h2>
      <p className="text-center">
        {currentLanguageData.about_content}{" "}
        <a
          className="font-medium hover:underline"
          href="https://go.dev/"
          target="_blank"
        >
          Go
        </a>{" "}
        {(props.language == "en") ? "and" : "i"}{"  "}
        <a
          className="font-medium hover:underline"
          href="https://www.rust-lang.org/"
          target="_blank"
        >
          Rust
        </a>.
      </p>
      <div className="flex mt-6 w-full">
        <h3 className="col-span-0 font-medium text-2xl">
          {currentLanguageData.technology_title}
        </h3>
        <ul className="col-span-0 list-none mx-4 my-1">
          <li className="font-medium">{currentLanguageData.frontend_label}</li>
          <ul className="col-span-0 list-none mx-4">
            <li>typescript</li>
            <li>javascript</li>
            <ul className="col-span-0 list-none mx-4">
              <li>react</li>
              <li>tailwindcss</li>
              <li>bootstrap</li>
            </ul>
          </ul>
          <li className="font-medium">{currentLanguageData.backend_label}</li>
          <ul className="col-span-0 list-none mx-4">
            <li>go</li>
            <li>rust</li>
            <li>python</li>
            <li>c#</li>
          </ul>
          <li className="font-medium">{currentLanguageData.database_label}</li>
          <ul className="col-span-0 list-none mx-4">
            <li>mongodb</li>
            <li>sql</li>
          </ul>
          <li className="font-medium">{currentLanguageData.tooling_label}</li>
          <ul className="col-span-0 list-none mx-4">
            <li>docker</li>
            <li>kubernetes</li>
            <li>nginx</li>
            <li>github actions</li>
          </ul>
        </ul>
      </div>
      <div className="mt-4">
        {currentLanguageData.about_closer} {""}

        <a
          className="font-medium hover:underline"
          href="javascript:void(0);"
          onClick={() => props.navigate("/repositories")}
        >
          {(props.language == "en") ? "repositories" : "repositoris"}
        </a>.
      </div>
    </>
  );
}

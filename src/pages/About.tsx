import { Language } from "../components/LanguagePicker";
import LanguageData from "../../public/language.json";
import { NavigateFunction } from "react-router-dom";

export interface AboutProps {
  language: keyof Language;
  navigate: NavigateFunction;
}

export default function About(props: AboutProps) {
  const currentLanguageData = LanguageData[props.language];

  return (
    <>
      <h2 className="font-medium text-2xl mb-4">
        {currentLanguageData.about_title}
      </h2>
      <p className="justify-self-start">
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
      <div className="flex mt-6">
        <h3 className="col-span-0 justify-self-start font-medium text-2xl">
          {currentLanguageData.technology_title}
        </h3>
        <ul className="col-span-0 list-none mx-4 my-1">
          <li className="justify-self-start font-medium">{currentLanguageData.frontend_label}</li>
          <ul className="col-span-0 list-none mx-4">
            <li className="justify-self-start">typescript</li>
            <li className="justify-self-start">javascript</li>
            <ul className="col-span-0 list-none mx-4">
              <li className="justify-self-start">react</li>
              <li className="justify-self-start">tailwindcss</li>
              <li className="justify-self-start">bootstrap</li>
            </ul>
          </ul>
          <li className="justify-self-start font-medium">{currentLanguageData.backend_label}</li>
          <ul className="col-span-0 list-none mx-4">
            <li className="justify-self-start">go</li>
            <li className="justify-self-start">rust</li>
            <li className="justify-self-start">python</li>
            <li className="justify-self-start">c#</li>
          </ul>
          <li className="justify-self-start font-medium">{currentLanguageData.database_label}</li>
          <ul className="col-span-0 list-none mx-4">
            <li className="justify-self-start">mongodb</li>
            <li className="justify-self-start">sql</li>
          </ul>
          <li className="justify-self-start font-medium">{currentLanguageData.tooling_label}</li>
          <ul className="col-span-0 list-none mx-4">
            <li className="justify-self-start">docker</li>
            <li className="justify-self-start">kubernetes</li>
            <li className="justify-self-start">nginx</li>
            <li className="justify-self-start">github actions</li>
          </ul>
        </ul>
      </div>
      <div className="justify-self-start mt-4">
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

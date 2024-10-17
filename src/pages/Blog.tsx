import { Language } from "../components/LanguagePicker";

import LanguageData from "../../public/language.json";

export interface BlogProps {
  language: keyof Language;
}

export default function Blog(props: BlogProps) {
  const currentLanguageData = LanguageData[props.language];

  return (
    <>
      <h2 className="font-medium text-2xl mb-4">
        {currentLanguageData.blog_title}
      </h2>
    </>
  );
}

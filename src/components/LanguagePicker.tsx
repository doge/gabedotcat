export interface TranslatedWords {
  blog_title: string;
  repo_title: string;
}

export interface Language {
  en: TranslatedWords;
  cat: TranslatedWords;
}

export interface LanguageProps {
  language: keyof Language;
  onLanguageChange: (language: keyof Language) => void;
}

export default function LanguagePicker(props: LanguageProps) {
  return (
    <>
      <div className="flex gap-2 justify-self-end">
        <a
          href="javascript:void(0);"
          className="hover:font-medium"
          onClick={() => {
            props.onLanguageChange("en");
          }}
        >
          en
        </a>
        <div>
          /
        </div>
        <a
          href="javascript:void(0);"
          className="hover:font-medium"
          onClick={() => {
            props.onLanguageChange("cat");
          }}
        >
          cat
        </a>
      </div>
    </>
  );
}

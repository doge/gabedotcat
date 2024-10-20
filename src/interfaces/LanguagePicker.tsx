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

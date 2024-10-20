import { LanguageProps } from "../interfaces/LanguagePicker";

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

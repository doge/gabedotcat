import { NavigateFunction } from "react-router-dom";

export interface HeaderProps {
  blog_title: string;
  about_title: string;
  repo_title: string;
  navigate: NavigateFunction;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <div className="sm:grid xs:flex grid-cols-2 gap-4 px-2 sm:py-1">
        <div className="justify-self-start font-bold text-xl">
          gabe
        </div>
        <div className="flex gap-4 justify-self-end">
          <a
            href="javascript:void(0);"
            className="hover:underline font-bold text-xl"
            onClick={() => props.navigate("/about")}
          >
            {props.about_title}
          </a>
          <a
            href="javascript:void(0);"
            className="hover:underline font-bold text-xl"
            onClick={() => props.navigate("/repositories")}
          >
            {props.repo_title}
          </a>
          <a
            href="https://github.com/doge"
            className="hover:underline font-bold text-xl"
          >
            github
          </a>
        </div>
      </div>
    </>
  );
}

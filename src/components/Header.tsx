import { HeaderProps } from "../interfaces/Header";

export default function Header(props: HeaderProps) {
  return (
    <>
      <div className="xs:flex sm:grid grid-cols-2 gap-4 px-2 sm:py-1">
        <a
          href="javascript:void(0);"
          className="justify-self-start font-bold text-xl"
          onClick={() => props.navigate("/")}
        >
          gabe
        </a>
        <div className="flex gap-4 justify-self-center sm:justify-self-end">
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
            href="javascript:void(0);"
            className="hover:underline font-bold text-xl"
            onClick={() => props.navigate("/blog")}
          >
            {props.blog_title}
          </a>
          <a
            href="https://github.com/doge"
            className="hover:underline font-bold text-xl"
            target="_blank"
          >
            github
          </a>
          <a
            href="mailto:me@gabe.cat"
            className="hover:underline font-bold text-xl"
          >
            {props.contact_title}
          </a>
        </div>
      </div>
    </>
  );
}

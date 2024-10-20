import { Language } from "../interfaces/LanguagePicker";
import LanguageData from "../../public/language.json";
import BlogCard from "../components/BlogCard";
import React from "react";

export interface BlogProps {
  language: keyof Language;
}

/*
  have blogs listed in cards on the page
  user clicks card -> views blog

  hidden subroute can be used to authenticate. if they're authenticated,
    - show a button/clickable text to add a blog
    - allow them to access secret subroute like /blog/create
      - markdown editor

  display blogs in markdown
*/

export default function Blog(props: BlogProps) {
  const currentLanguageData = LanguageData[props.language];

  // fetch the current blogs here and display them
  React.useEffect(() => {
  }, []);

  return (
    <>
      <h2 className="font-medium text-2xl mb-4 text-center">
        {currentLanguageData.blog_title}
      </h2>

      <body>
        <BlogCard
          title={"how i created a blog using rust and react"}
          date={"2024-10-19"}
          content={"lorem ipsum solo dolor..."}
        />
        <BlogCard
          title={"how to crack the konami code"}
          date={"2024-10-19"}
          content={"up up down down left right left righit b up up up"}
        />
        <BlogCard
          title={"my first blog"}
          date={"2024-10-19"}
          content={"im so cool cause this is my first blog..."}
        />
      </body>
    </>
  );
}

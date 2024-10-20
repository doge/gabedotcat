import { NavigateFunction } from "react-router-dom";

export interface HeaderProps {
  blog_title: string;
  about_title: string;
  repo_title: string;
  contact_title: string;
  navigate: NavigateFunction;
}

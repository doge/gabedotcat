export interface BlogCardProps {
  title: string;
  content: string;
  date: string;
}

export interface BlogContent extends BlogCardProps {
  _id: string;
}

import { BlogCardProps } from "../interfaces/Blog";

export default function BlogCard(props: BlogCardProps) {
  return (
    <>
      <a
        target="_blank"
        className="block h-full w-full p-6 border border-gray-200 rounded-md m-2"
      >
        <div>
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
            {props.title}
          </h5>
          <text className="text-sm">{props.date}</text>
        </div>
        <p className="mt-2 justify-left leading-relaxed font-normal text-gray-700">
          {props.content}
        </p>
      </a>
    </>
  );
}

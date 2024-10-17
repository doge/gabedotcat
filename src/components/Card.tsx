import { GitHubResponse } from "../Response";

export default function Card(repo: GitHubResponse) {
  return (
    <>
      <a
        href={repo.html_url}
        className="block h-full w-full p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <div>
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
            {repo.name.toLowerCase()}
          </h5>
          <text className="text-sm">{repo.language.toLowerCase()}</text>
        </div>
        <p className="mt-2 justify-left leading-relaxed font-normal text-gray-700">
          {repo.description?.toLowerCase()}
        </p>
      </a>
    </>
  );
}

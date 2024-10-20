import React from "react";

import Card from "../components/RepositoryCard";
import { GitHubResponse } from "../Response";

import LanguageData from "../../public/language.json";
import { Language } from "../interfaces/LanguagePicker";

export interface RepositoryProps {
  language: keyof Language;
}

export default function Repositories(props: RepositoryProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [gitRepositories, setGitRepositories] = React.useState([]);

  const currentLanguageData = LanguageData[props.language];

  React.useEffect(() => {
    if (!isLoaded) {
      fetch("https://api.github.com/users/doge/repos")
        .then((res) => res.json())
        .then(
          (result) => {
            // Sort the response by the newest date first
            result.sort(function (a: GitHubResponse, b: GitHubResponse) {
              return new Date(b.pushed_at).valueOf() -
                new Date(a.pushed_at).valueOf();
            });

            setIsLoaded(true);
            setGitRepositories(result);
          },
          (_) => {
            setIsLoaded(false);
          },
        );
    }
  });

  if (!isLoaded) return <>loading {currentLanguageData.repo_title}...</>;
  else {
    return (
      <>
        <h2 className="font-medium text-2xl mb-4 text-center">
          {currentLanguageData.repo_title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center">
          <Card
            id={0}
            node_id={""}
            name={"OpenCamp"}
            full_name={""}
            private={false}
            owner={undefined}
            html_url={"https://opencamp.app"}
            fork={false}
            url={""}
            forks_url={""}
            keys_url={""}
            collaborators_url={""}
            teams_url={""}
            hooks_url={""}
            issue_events_url={""}
            events_url={""}
            assignees_url={""}
            branches_url={""}
            tags_url={""}
            blobs_url={""}
            git_tags_url={""}
            git_refs_url={""}
            trees_url={""}
            statuses_url={""}
            languages_url={""}
            stargazers_url={""}
            contributors_url={""}
            subscribers_url={""}
            subscription_url={""}
            commits_url={""}
            git_commits_url={""}
            comments_url={""}
            issue_comment_url={""}
            contents_url={""}
            compare_url={""}
            merges_url={""}
            archive_url={""}
            downloads_url={""}
            issues_url={""}
            pulls_url={""}
            milestones_url={""}
            notifications_url={""}
            labels_url={""}
            releases_url={""}
            deployments_url={""}
            created_at={""}
            updated_at={""}
            pushed_at={""}
            git_url={""}
            ssh_url={""}
            clone_url={""}
            svn_url={""}
            size={0}
            stargazers_count={0}
            watchers_count={0}
            language={"go"}
            has_issues={false}
            has_projects={false}
            has_downloads={false}
            has_wiki={false}
            has_pages={false}
            has_discussions={false}
            forks_count={0}
            mirror_url={undefined}
            archived={false}
            disabled={false}
            open_issues_count={0}
            allow_forking={false}
            is_template={false}
            web_commit_signoff_required={false}
            topics={[]}
            visibility={""}
            forks={0}
            open_issues={0}
            watchers={0}
            default_branch={""}
            description="get sold-out campground reservations at canadian national parks."
            {...{}}
          />

          {gitRepositories.slice(0, 8).map((repo: GitHubResponse) => (
            <Card {...repo} />
          ))}
        </div>
      </>
    );
  }
}
